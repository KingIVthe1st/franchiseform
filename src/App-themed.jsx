import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";
import FormHeader from "./components/FormHeader-themed";
import ProgressBar from "./components/ProgressBar-themed";
import FormSection from "./components/FormSection-themed";
import { formSections } from "./data/formSections";

function App({ theme }) {
  const [currentSection, setCurrentSection] = useState(0);
  const [formData, setFormData] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Auto-save to localStorage
  useEffect(() => {
    const saved = localStorage.getItem(`fdd-form-data-${theme.name}`);
    if (saved) {
      setFormData(JSON.parse(saved));
    }
  }, [theme.name]);

  useEffect(() => {
    localStorage.setItem(
      `fdd-form-data-${theme.name}`,
      JSON.stringify(formData),
    );
  }, [formData, theme.name]);

  const handleFieldChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleNext = () => {
    if (currentSection < formSections.length - 1) {
      setCurrentSection((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handlePrevious = () => {
    if (currentSection > 0) {
      setCurrentSection((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Format form data as clean plain text
  const formatFormDataAsText = (data) => {
    let textOutput = "=".repeat(60) + "\n";
    textOutput += "FDD QUESTIONNAIRE SUBMISSION\n";
    textOutput += "Franchise Machine™\n";
    textOutput += "=".repeat(60) + "\n\n";

    // Get submission timestamp
    textOutput += `Submitted: ${new Date().toLocaleString("en-US", {
      dateStyle: "full",
      timeStyle: "long",
    })}\n\n`;

    // Iterate through each section
    formSections.forEach((section) => {
      // Skip sections without fields
      if (!section.fields || section.fields.length === 0) {
        return;
      }

      textOutput += `SECTION ${section.number}: ${section.title.toUpperCase()}\n`;
      textOutput += "-".repeat(60) + "\n";

      section.fields.forEach((field) => {
        const value = data[field.name];

        // Skip empty fields
        if (!value || value === "") {
          return;
        }

        // Format the field
        textOutput += `\n${field.label}:\n`;

        if (value instanceof File) {
          textOutput += `  [FILE ATTACHMENT: ${value.name}]\n`;
        } else if (Array.isArray(value)) {
          textOutput += `  ${value.join(", ")}\n`;
        } else {
          // Handle multi-line values
          const lines = String(value).split("\n");
          lines.forEach((line) => {
            textOutput += `  ${line}\n`;
          });
        }
      });

      textOutput += "\n";
    });

    textOutput += "=".repeat(60) + "\n";
    textOutput += "End of submission\n";
    textOutput += "=".repeat(60) + "\n";

    return textOutput;
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);

    // Format as clean plain text
    const plainTextMessage = formatFormDataAsText(formData);

    // Prepare form data for submission
    const formDataToSend = new FormData();

    // Add the formatted plain text message
    formDataToSend.append("message", plainTextMessage);

    // Add file attachments separately
    Object.keys(formData).forEach((key) => {
      if (formData[key] instanceof File) {
        formDataToSend.append(key, formData[key]);
      }
    });

    // Web3Forms configuration
    formDataToSend.append("access_key", "640b6e44-f07d-4161-a972-2e297273fd85");
    formDataToSend.append(
      "subject",
      "New FDD Questionnaire Submission - Franchise Machine",
    );
    formDataToSend.append("from_name", "Franchise Machine Intake Form");
    formDataToSend.append("email", "juan@franchisemachine.com");
    formDataToSend.append("redirect", "https://intake.franchisemachine.com/");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend,
      });

      const data = await response.json();

      if (data.success) {
        alert("Form submitted successfully! We will be in touch soon.");
        localStorage.removeItem(`fdd-form-data-${theme.name}`);
        setFormData({});
        setCurrentSection(0);
      } else {
        alert("There was an error submitting the form. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("There was an error submitting the form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const progress = ((currentSection + 1) / formSections.length) * 100;

  return (
    <div
      className="min-h-screen"
      style={{ background: theme.colors.background }}
    >
      <FormHeader theme={theme} currentSection={currentSection} />

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <ProgressBar
          progress={progress}
          currentSection={currentSection + 1}
          totalSections={formSections.length}
          theme={theme}
        />

        <AnimatePresence mode="wait">
          <motion.div
            key={currentSection}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
          >
            <FormSection
              section={formSections[currentSection]}
              formData={formData}
              onChange={handleFieldChange}
              theme={theme}
            />
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-between items-center mt-12 gap-4">
          <button
            onClick={handlePrevious}
            disabled={currentSection === 0}
            className="btn-secondary"
            style={{
              backgroundColor: theme.colors.buttonSecondary,
              borderColor: theme.colors.buttonSecondaryBorder,
              color: theme.colors.bodyText,
              opacity: currentSection === 0 ? 0.5 : 1,
              cursor: currentSection === 0 ? "not-allowed" : "pointer",
            }}
          >
            Previous
          </button>

          {currentSection < formSections.length - 1 ? (
            <button
              onClick={handleNext}
              className="btn-primary"
              style={{
                backgroundColor: theme.colors.buttonPrimary,
              }}
            >
              Next Section
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="btn-primary"
              style={{
                backgroundColor: theme.colors.buttonPrimary,
                opacity: isSubmitting ? 0.5 : 1,
              }}
            >
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </button>
          )}
        </div>
      </main>

      <footer
        className="text-center py-8 text-sm"
        style={{ color: theme.colors.labelText }}
      >
        © 2026 MyFranchiseMachine. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
