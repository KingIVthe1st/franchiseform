export const formSections = [
  {
    number: 1,
    title: "The Franchisor, and Any Parent, Predecessors, and Affiliates",
    description: "Please provide information about your franchise entity and related companies.",
    fields: [
      {
        name: "franchisor_name",
        label: "What is the name of the entity that will serve as the Franchisor?",
        type: "text",
        required: true,
        placeholder: "Enter franchisor entity name"
      },
      {
        name: "franchisor_state",
        label: "State of formation",
        type: "text",
        required: true,
        placeholder: "e.g., Delaware"
      },
      {
        name: "franchisor_date",
        label: "Date entity was formed",
        type: "date",
        required: true
      },
      {
        name: "franchisor_email",
        label: "General business email address",
        type: "email",
        required: true,
        placeholder: "email@example.com"
      },
      {
        name: "franchisor_address",
        label: "Franchisor's address",
        type: "text",
        required: true,
        placeholder: "Full business address"
      },
      {
        name: "franchisor_phone",
        label: "Telephone number",
        type: "tel",
        required: true,
        placeholder: "(555) 555-5555"
      },
      {
        name: "franchisor_website",
        label: "Primary website",
        type: "url",
        placeholder: "https://example.com"
      },
      {
        name: "franchisor_logo",
        label: "Upload your primary logo (JPEG)",
        type: "file",
        accept: "image/jpeg,image/jpg",
        placeholder: "Upload logo file"
      },
      {
        name: "has_parent",
        label: "Does the Franchisor have a parent company?",
        type: "radio",
        options: ["Yes", "No"],
        required: true
      },
      {
        name: "parent_details",
        label: "If yes, provide parent company details (name, state, address)",
        type: "textarea",
        rows: 3,
        placeholder: "Parent company information..."
      }
    ]
  },
  {
    number: 2,
    title: "Business Experience",
    description: "Upload completed Management Questionnaire for all directors, officers, and managers.",
    fields: [
      {
        name: "management_questionnaire",
        label: "Management Questionnaire (Exhibit A)",
        type: "file",
        accept: ".pdf,.doc,.docx",
        required: true,
        helpText: "Each person with management responsibility must complete this questionnaire"
      }
    ]
  },
  {
    number: 3,
    title: "Litigation",
    description: "Disclose litigation-related information for the franchisor and related entities/individuals.",
    fields: [
      {
        name: "litigation_exhibit",
        label: "Upload Exhibit A with litigation information",
        type: "file",
        accept: ".pdf,.doc,.docx",
        required: true
      }
    ]
  },
  {
    number: 4,
    title: "Bankruptcy",
    description: "Disclose bankruptcy-related information for the franchisor and related entities/individuals.",
    fields: [
      {
        name: "bankruptcy_exhibit",
        label: "Upload Exhibit A with bankruptcy information",
        type: "file",
        accept: ".pdf,.doc,.docx",
        required: true
      }
    ]
  },
  {
    number: 5,
    title: "Initial Fees",
    description: "Provide details about franchise fees and payment terms.",
    fields: [
      {
        name: "initial_franchise_fee",
        label: "Initial franchise fee amount",
        type: "text",
        required: true,
        placeholder: "$50,000"
      },
      {
        name: "fee_payment_terms",
        label: "Payment terms",
        type: "radio",
        options: ["Lump Sum Only", "Installment Payments", "Other Financing Options"],
        required: true
      },
      {
        name: "payment_terms_details",
        label: "If installments or financing, provide terms (duration, interest rate, etc.)",
        type: "textarea",
        rows: 3
      },
      {
        name: "fee_refundable",
        label: "Is the initial franchise fee refundable?",
        type: "radio",
        options: ["Yes", "No"],
        required: true
      },
      {
        name: "refund_circumstances",
        label: "If yes, under what circumstances?",
        type: "textarea",
        rows: 2
      },
      {
        name: "multi_unit_development",
        label: "Do you plan to offer a Multi-Unit Development Agreement?",
        type: "radio",
        options: ["Yes", "No"],
        required: true
      }
    ]
  },
  {
    number: 6,
    title: "Other Fees",
    description: "List all recurring and one-time fees franchisees will pay.",
    fields: [
      {
        name: "royalty_fee",
        label: "Royalty Fee (% or flat rate)",
        type: "text",
        placeholder: "5% of gross sales"
      },
      {
        name: "local_advertising_fee",
        label: "Local Advertising Fee",
        type: "text"
      },
      {
        name: "advertising_fund_fee",
        label: "Advertising Fund Fee",
        type: "text"
      },
      {
        name: "transfer_fee",
        label: "Transfer Fee",
        type: "text"
      },
      {
        name: "renewal_fee",
        label: "Renewal Fee",
        type: "text"
      },
      {
        name: "other_fees",
        label: "Other fees not listed above",
        type: "textarea",
        rows: 4,
        placeholder: "List any additional fees with amounts and due dates..."
      }
    ]
  },
  {
    number: 7,
    title: "Estimated Initial Investment",
    description: "Provide estimated costs for opening a franchised business.",
    fields: [
      {
        name: "leasehold_improvements",
        label: "Leasehold Improvements (low-high range)",
        type: "text",
        placeholder: "$50,000 - $100,000"
      },
      {
        name: "equipment_costs",
        label: "Furniture, Fixtures and Equipment",
        type: "text",
        placeholder: "$30,000 - $60,000"
      },
      {
        name: "signage_costs",
        label: "Signage",
        type: "text"
      },
      {
        name: "opening_inventory",
        label: "Opening Inventory and Supplies",
        type: "text"
      },
      {
        name: "computer_systems",
        label: "Computer Systems (POS, computers, etc.)",
        type: "text"
      },
      {
        name: "insurance_deposits",
        label: "Insurance Deposits and Premiums (3 months)",
        type: "text"
      },
      {
        name: "grand_opening_advertising",
        label: "Grand Opening Advertising",
        type: "text"
      },
      {
        name: "additional_funds",
        label: "Additional Funds (3 months working capital)",
        type: "text"
      },
      {
        name: "refundable_payments",
        label: "Are any of these payments refundable?",
        type: "radio",
        options: ["Yes", "No"]
      }
    ]
  },
  {
    number: 8,
    title: "Restrictions on Sources of Products and Services",
    description: "Information about suppliers and purchasing requirements.",
    fields: [
      {
        name: "franchisor_as_supplier",
        label: "Will Franchisor or affiliate act as supplier?",
        type: "radio",
        options: ["Yes", "No"],
        required: true
      },
      {
        name: "supplier_details",
        label: "If yes, what goods/services will be supplied?",
        type: "textarea",
        rows: 3
      },
      {
        name: "exclusive_supplier",
        label: "Will Franchisor be the exclusive supplier?",
        type: "radio",
        options: ["Yes", "No"]
      },
      {
        name: "supplier_approval_criteria",
        label: "How are suppliers evaluated and approved?",
        type: "textarea",
        rows: 4
      },
      {
        name: "franchisor_revenue_from_purchases",
        label: "Will Franchisor receive revenue/rebates from franchisee purchases?",
        type: "radio",
        options: ["Yes", "No"]
      }
    ]
  },
  {
    number: 9,
    title: "Franchisee's Obligations",
    description: "This section will be auto-generated based on your franchise agreement."
  },
  {
    number: 10,
    title: "Financing",
    description: "Information about financing options offered to franchisees.",
    fields: [
      {
        name: "franchisor_offers_financing",
        label: "Will Franchisor or affiliate offer financing?",
        type: "radio",
        options: ["Yes", "No"],
        required: true
      },
      {
        name: "financing_details",
        label: "If yes, describe financing terms (down payment, duration, interest rate)",
        type: "textarea",
        rows: 4
      },
      {
        name: "lender_arrangements",
        label: "Are there arrangements with lenders?",
        type: "radio",
        options: ["Yes", "No"]
      }
    ]
  },
  {
    number: 11,
    title: "Franchisor's Assistance, Advertising, Computer Systems, and Training",
    description: "Services provided to franchisees before and after opening.",
    fields: [
      {
        name: "pre_opening_services",
        label: "Services provided before opening (check all that apply)",
        type: "textarea",
        rows: 4,
        placeholder: "Site selection, permits, construction, training, etc."
      },
      {
        name: "post_opening_services",
        label: "Services provided after opening",
        type: "textarea",
        rows: 4,
        placeholder: "Ongoing training, marketing, operational support, etc."
      },
      {
        name: "time_to_opening",
        label: "Estimated time from signing to opening",
        type: "text",
        placeholder: "3-6 months"
      },
      {
        name: "advertising_fund_contribution",
        label: "Advertising fund contribution (% or amount)",
        type: "text"
      },
      {
        name: "computer_system_requirements",
        label: "Required computer systems (POS, CRM, software)",
        type: "textarea",
        rows: 3
      },
      {
        name: "training_location",
        label: "Training location",
        type: "text",
        placeholder: "Corporate headquarters, online, etc."
      },
      {
        name: "training_duration",
        label: "Training duration and frequency",
        type: "text",
        placeholder: "2 weeks initially, refresher annually"
      },
      {
        name: "training_fee",
        label: "Is there a fee for training?",
        type: "radio",
        options: ["Yes", "No"]
      },
      {
        name: "operations_manual_toc",
        label: "Upload Operations Manual Table of Contents",
        type: "file",
        accept: ".pdf,.doc,.docx"
      }
    ]
  },
  {
    number: 12,
    title: "Territory",
    description: "Protected territory and location approval information.",
    fields: [
      {
        name: "location_approval",
        label: "Will franchise location be approved by franchisor?",
        type: "radio",
        options: ["Yes", "No"],
        required: true
      },
      {
        name: "protected_territory",
        label: "Will franchisee have a protected territory?",
        type: "radio",
        options: ["Yes", "No"],
        required: true
      },
      {
        name: "territory_determination",
        label: "How is territory determined? (radius, population, etc.)",
        type: "textarea",
        rows: 3
      },
      {
        name: "territory_size",
        label: "Average or minimum territory size",
        type: "text",
        placeholder: "3-mile radius, 50,000 population, etc."
      },
      {
        name: "territory_conditions",
        label: "Conditions to maintain territory (sales volume, etc.)?",
        type: "textarea",
        rows: 2
      }
    ]
  },
  {
    number: 13,
    title: "Trademarks",
    description: "Information about registered trademarks and service marks.",
    fields: [
      {
        name: "trademarks_registered",
        label: "Have you obtained or filed for USPTO registration?",
        type: "radio",
        options: ["Yes", "No"],
        required: true
      },
      {
        name: "trademark_details",
        label: "Provide details for each trademark (description, registration number, owner)",
        type: "textarea",
        rows: 5,
        placeholder: "List each trademark with registration/application number..."
      }
    ]
  },
  {
    number: 14,
    title: "Patents, Copyrights and Proprietary Information",
    description: "Information about patents and copyrights material to the franchise.",
    fields: [
      {
        name: "has_patents",
        label: "Does Franchisor own material patent rights?",
        type: "radio",
        options: ["Yes", "No"]
      },
      {
        name: "patent_details",
        label: "If yes, provide patent details",
        type: "textarea",
        rows: 3
      },
      {
        name: "has_copyrights",
        label: "Are there copyrights filed with US Register of Copyrights?",
        type: "radio",
        options: ["Yes", "No"]
      },
      {
        name: "copyright_details",
        label: "If yes, provide copyright details",
        type: "textarea",
        rows: 3
      }
    ]
  },
  {
    number: 15,
    title: "Obligation to Participate in the Actual Operation",
    description: "Requirements for franchisee participation in business operations.",
    fields: [
      {
        name: "on_premises_supervision_required",
        label: "Is on-premises supervision required?",
        type: "radio",
        options: ["Yes", "No"],
        required: true
      },
      {
        name: "can_hire_manager",
        label: "Can franchisee hire a manager to supervise?",
        type: "radio",
        options: ["Yes", "No"],
        required: true
      }
    ]
  },
  {
    number: 16,
    title: "Restrictions on What the Franchisee May Sell",
    description: "This section will be completed based on your franchise agreement terms."
  },
  {
    number: 17,
    title: "Renewal, Termination, Transfer and Dispute Resolution",
    description: "This section will be completed based on your franchise agreement terms."
  },
  {
    number: 18,
    title: "Public Figures",
    description: "Information about public figure endorsements.",
    fields: [
      {
        name: "public_figure_endorsement",
        label: "Are there any public figures endorsing the franchise?",
        type: "radio",
        options: ["Yes", "No"],
        required: true
      },
      {
        name: "public_figure_details",
        label: "If yes, provide details (who, compensation, interest in franchise)",
        type: "textarea",
        rows: 3
      }
    ]
  },
  {
    number: 19,
    title: "Financial Performance Representations",
    description: "Optional disclosure of financial performance information.",
    fields: [
      {
        name: "provide_fpr",
        label: "Do you wish to include financial performance representations in the FDD?",
        type: "radio",
        options: ["Yes", "No"],
        helpText: "This is the only optional disclosure in the FDD. We'll discuss requirements if yes."
      },
      {
        name: "fpr_notes",
        label: "Additional notes or questions about Item 19",
        type: "textarea",
        rows: 3
      }
    ]
  },
  {
    number: 20,
    title: "Outlets and Franchisee Information",
    description: "Information about existing and projected franchise units.",
    fields: [
      {
        name: "target_states",
        label: "List target states and projected units for each",
        type: "textarea",
        rows: 5,
        required: true,
        placeholder: "California: 10 units\nTexas: 8 units\netc."
      },
      {
        name: "existing_units",
        label: "Number of existing company-owned or franchise units",
        type: "text",
        placeholder: "0 (if new franchise)"
      }
    ]
  },
  {
    number: 21,
    title: "Financial Statements",
    description: "Required audited financial statements for the FDD.",
    fields: [
      {
        name: "financial_statement_status",
        label: "Current status of financial statements",
        type: "textarea",
        rows: 4,
        required: true,
        helpText: "We'll discuss the phased-in requirements based on your target states and fiscal year.",
        placeholder: "Describe current financials, CPA, audit status..."
      },
      {
        name: "cpa_contact",
        label: "CPA firm contact information",
        type: "text",
        placeholder: "Firm name, contact person, phone, email"
      }
    ]
  }
]
