#!/bin/bash

# Test form submission to verify email formatting

curl -X POST https://intake.franchisemachine.com/submit-form.php \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "company_legal_name=Test Franchise Corporation" \
  -d "doing_business_as=Test Franchise" \
  -d "company_address=123 Main Street, Suite 100" \
  -d "city=Los Angeles" \
  -d "state=California" \
  -d "zip=90001" \
  -d "phone=555-123-4567" \
  -d "email=testfranchise@example.com" \
  -d "website=https://testfranchise.com" \
  -d "contact_person=John Smith" \
  -d "contact_title=CEO" \
  -d "business_description=We are a fast-casual restaurant franchise specializing in healthy bowls and smoothies." \
  -d "franchise_fee=45000" \
  -d "royalty_fee=6% of gross sales" \
  -d "marketing_fee=2% of gross sales" \
  -d "estimated_initial_investment_low=250000" \
  -d "estimated_initial_investment_high=450000" \
  -d "territory_type=Exclusive territory" \
  -d "territory_size=5 mile radius" \
  -d "training_program=2 weeks initial training at headquarters plus 1 week on-site" \
  -d "support_services=Marketing support, operations manual, ongoing training" \
  -d "years_in_business=5" \
  -d "number_of_locations=15" \
  -d "franchises_sold=12"

echo ""
echo "Test form submitted!"
