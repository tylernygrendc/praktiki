# Project Overview

Chiropractic is a licensed healthcare profession specializing in the treatment of musculoskeletal disorders. The chiropractic profession includes more than 70,000 physicians, with an estimated 2,500 new practitioners entering the workforce annually.[[1](https://www.acatoday.org/news-publications/newsroom/key-facts/)] Thirty-one percent of chiropractors are self-employed. The US Bureau of Labor Statistics estimates 10% market growth between 2021 and 2031.[[2](https://www.bls.gov/ooh/healthcare/chiropractors.htm#tab-3)] Practice management software solutions such as ChiroTouch[[3](https://www.chirotouch.com/plans-and-features/)] and JaneApp[[4](https://jane.app/features)] are popular among the profession, usually including these features:

1. Electronic health record management
2. Appointment and scheduling
3. Text and email notifications
4. Payment processing
5. Patient management
6. Invoicing and receipts
7. Claim generation and submission
8. Business reporting

## 1. Electronic Health Record Management (eHR)

### A. Security

The Health Insurance Portability and Accountability Act of 1996 (HIPAA) is a federal law that establishes data privacy and security requirements for organizations that are charged with safeguarding individuals' protected health information (PHI). Many services, including Google Cloud Platform, offer compliant cloud solutions.[[5](https://cloud.google.com/security/compliance/hipaa-compliance)]

### B. Compliance

The chiropractic profession has struggled, historically, with maintaining high-quality records. While eHR solutions purport to remedy common errors, current eHR solutions have failed to adequately address this problem. This failure to maintain high-quality records despite the introduction of robust, standardized systems is attributed to:

- Improper utilization
- Insufficient training
- Difficulty integrating eHR into the clinical setting[[6](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5812902/)]

Health records must contain sufficient information to identify the patient, to support the diagnosis, to justify the treatment, to document the course and results, and to promote continuity of care among health care providers.[[7](https://policy.ucop.edu/doc/1100168/LegalMedicalRecord)] Modern medical records generally utilize the SOAP format (subjective, objective, assessment, and plan). Goal-oriented documentation has been emphasized in recent years with chiropractors being advised to design treatment plans centered on SMART (specific, measurable, attainable, relevant, and time-based) goals. EHR may enhance the providers ability to easily track and assess goal-oriented patient outcomes.

### C. Common Documentation Practices

Although variation is permitted amongst providers, compliant documentation systems usually include the following structure:
- __Office Policies__ including notice of financial responsibility (including notice of insurance non-coverage if applicable), notice of privacy practices, informed consent to the use electronic systems for documentation and communication, and informed consent to the disclosure of protected health information for the purpose of insurance filing.
- __Informed Consent__ to manual evaluation methods and common chiropractic services.
- __Health History Intake__ including history of present illness, review of systems, past medical history, occupational history, family history, and social history.
- __Problem-Specific Questionnaires__ for the purpose of outcome assessment, such as a general pain index, a quadruple visual analog scale, or disability indices.
- __Oral History__ following the OPQRST format (onset, palliative/provocative, quality, radiation, site/severity, timing/trend) OR an age appropriate general health history.
- __Physical Examination__ including vital signs, range of motion, and problem-specific orthopedic/neurologic evaluation OR general health screening.
- __Chiropractic Examination__ based on the PART criteria (pain, asymmetry, restriction, and tissue change) that may also include muscle testing, paraspinal thermography, surface electromyography, or x-ray imaging for the purpose of chiropractic technique.
- __Assessment__ including a summary of relevant findings from the history and examination, diagnoses based on these findings, goals based on questionnaires, history and examination, and prognosis based on the diagnosis and goals.
- __Referral for Imaging or Labs__ in cases where the diagnosis cannot be determined AND where treatment is reliant on confirmation of the diagnosis, or where ACR guidelines deem imaging appropriate, or where imaging or labs would be otherwise beneficial for both the patient and the provider.
- __Referral for Alternative Treatment or Second Opinion__ for cases chiropractic therapies are not appropriate.
- __Treatment Plan__ based on current clinical guidelines for the diagnosis that specify the technique or therapy, the frequency and duration of treatment, adjunct therapies including in-office and at-home rehabilitation, and reassessment dates.
- __Good Faith Estimate of Treatment Costs__ that details each service and item required by the care plan as well as its individual cost and the total estimated cost of the care plan.
- __Procedures__ documenting treatment parameters such as technique, regions, duration, and response to care as well as subjective and objective assessments of the patient's progression as well as any modifications to the treatment plan.
- __Reassessment__ documenting subjective and objective measures of improvement (or lack thereof) pertaining to the goals of treatment and any necessary modifications to the care plan.
- __Referral for Imaging or Labs__ for cases chiropractic therapies are ineffective.
- __Referral for Alternative Treatment or Second Opinion__ for cases chiropractic therapies are ineffective.
- __Discharge from Care__ for cases where chiropractic therapies are effective.
- __Case Narrative__ summarizing the problem, progression, and outcome.

In addition, all imaging, reports, and the like must be included in the patient's record.

### D. Documenting Treatment for the Purpose of Health Maintenance

Chiropractic is founded on the principle that segmental dysfunction may have profound effects of the body's overall function. As a result, chiropractic therapies are often used for the purpose of health maintenance. In these cases, the same documentation system described previously is appropriate, except that an annual "well visit" should be used in lieu of reassessment (since no goals are tracked). Chiropractic therapies for the purpose of health maintenance may be performed as often as twice per month or as rarely as once per quarter, with the frequency being largely determined by patient preference.

### E. Common Chiropractic Therapies

|CPT|Procedure|
|---|---|
|98940|Chiropractic Manipulative Treatment, 1-2 Spinal Regions|
|98941|Chiropractic Manipulative Treatment, 3-4 Spinal Regions|
|98942|Chiropractic Manipulative Treatment, 5+ Spinal Regions|
|98943|Chiropractic Manipulative Treatment, Extraspinal Regions|
|99202|New patient office visit, Self-Limiting|
|99203|New patient office visit, Mild|
|99204|New patient office visit, Moderate|
|99205|New patient office visit, Severe|
|99212|Established patient office visit, Self-Limiting|
|99213|Established patient office visit, Mild|
|99214|Established patient office visit, Moderate|
|99215|Established patient office visit, Severe|
|99385|Initial comprehensive preventive medicine, age specific|
|99395|Periodic comprehensive preventive medicine, age specific|


## 2. Scheduling

Appointments must be made easily by both the provider and their staff, as well as by the patient through online and over-the-phone portals. In particular, it is critical that patient's be scheduled for the correct services. This task is difficult because a "chiropractic adjustment" includes several procedural codes (98940-98943) listed at varying costs, and the patient, as well as many chiropractic assistants, may be unable determine which is the correct service. Further complicating this task is the fact that most chiropractors perform an array of physiotherapeutic and rehabilitative services, and even some traditional medicines such as acupuncture. Some of these, such as manual therapy are bundled with a "chiropractic adjustment," while others are not. Same-day additions of these services, or other modifications to an appointment, must not be permitted to collide with other pre-scheduled events.

## 3. Text and Email Notifications

Appointment reminders are an essential feature for any practice management solution. In addition, users may benefit from secure systems for intra-office communication, direct patient communication, electronic receipts, and email/text marketing. Twilio offers a variety of solutions for programmatic text and email communication at the following rates:

|Message|Send|Receive|
|---|---|---|
|SMS|0.0079/msg|0.0079/msg|
|MMS|0.0200/msg|0.0200/msg|
|Voice|0.0140/min|0.0085/min|
|Toll-Free Voice|0.0130/min|0.0220/min|

*Email API includes 50,000 emails per month for base rate of 19.95.[[8](https://www.twilio.com/pricing)]

Twilio's services are compliant with the privacy and security rules established by the HIPAA.[[9](https://www.twilio.com/blog/understanding-twilio-baa)]


## 4. Payment Processing

All chiropractic practices must be equipped to accept multiple forms of payment. Stripe offers web compatible point-of-sale solutions at a rate of 2.7% + 0.05 per transaction. Hardware costs begin at 59.00.[[10](https://stripe.com/terminal)] Stripe is PCI compliant but does not meet the HIPAA's privacy and security rules. Accordingly, personally identifying information cannot be stored within Stripe's systems and any notification features must be disabled. 

## 5. Patient Management

It is important that each patient have a distinct profile attached to their health data. This profile should include:

* Demographic data including age, date of birth, sex, gender, race, ethnicity, and martial status
* Contact information including a mailing address, email, and phone
* Emergency contact information including a phone, email, and relationship 
* Primary physician information including name, address, and phone
* Insurance information including the carrier name, group number, and policy number
* Additional information such as eligibility for reduced rates
* Alerts including contraindications and monitored problems

## 6. Invoicing and Receipts

Stripe offers an online payment API at a rate of 3.4% + 0.30 per transaction. This functionality may be combined with Twilio services for email and text notifications. Receipts and invoices must include:

* Patient name
* Date of service
* Diagnosis requiring service
* Services rendered, including procedural codes
* Itemized cost of services
* Total cost of services
* Itemized cost of any items and any applicable taxes
* Total cost of items
* Total cost of taxes
* Total payment due
* Payment due date

Receipts must be available in both 8.500 and 3.125 inch widths for printing. Compatibility with dedicated receipt printers may be limited.

## 7. Claim Generation and Submission

[Eligible](https://eligible.com/) offers APIs for:

* Insurance Verification
* Insurance Claims Submission and Tracking
* Insurer Payments Estimation and Verification

## 8. Business Reporting

Business owners are primarily concerned with tracking:

* Patient encounters and services performed
* Daily, monthly, and annual earnings
* Earnings per practitioner, if applicable
* Sales tax and other tax considerations for filing

# Approach

## 1. Task List

* Determine Cloud Firestore data structure
* Create forms listed under [common documentation practices](#c-common-documentation-practices)
  * Define form styles and behavior
    * Input[type=text] and input[type=number]
    * Textfield 
    * Input[type=checkbox], input[type=radio], and fieldset
    * Input[type=date] and input[type=time]
    * Input[type=file]
    * Select
    * Range
    * Button
  * Allow for addition/deletion of form fields
    * Recommend form fields for next logical visceral, orthopedic, and neurologic testing and medical decision-making
    * Autofill common options
* Create form editor that includes:
  * Summary of important notes and alerts
  * History of previous notes
  * One-click access to previous notes, including initial visit and last reassessment (if applicable)
* Create note viewer that gives access to all patient notes
  * Create method for searching notes and patients
  * Option to create new note
* Create dashboard that summarizes same-day appointments, day stats, and shows check-in status
* Connect forms to firestore and set security rules
* Set-up Cloud Storage for document (.pdf) and image (.jpg and .png) files
* Create scheduling system that includes
  * Portal for patient self-scheduling
    * Allow only scheduling of pre-approved or entry-level services
    * Allow for rescheduling or cancellation
    * Update patient file with modifications to schedule
    * Option for staff approval
    * Notification of changes/confirmation
  * Tools for adding and modifying appointments by office staff
    * Automatic addition based on care plan
    * Allow for addition/removal of services
    * Allow for cancellation and rescheduling
    * Update patient file with modifications to schedule
    * Notification of changes/confirmation
  * Full day and week view of the current schedule
  * System for check-in and checkout



___

## References

1. [American Chiropractic Association](https://www.acatoday.org/news-publications/newsroom/key-facts/)
2. [US Bureau of Labor Statistics](https://www.bls.gov/ooh/healthcare/chiropractors.htm#tab-3)
3. [ChiroTouch Features](https://www.chirotouch.com/plans-and-features/)
4. [Jane App Features](https://jane.app/features)
5. [Google Cloud Platform BAA](https://cloud.google.com/security/compliance/hipaa-compliance)
6. [Journal of Chiropractic Humanities](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5812902/)
7. [University of California](https://policy.ucop.edu/doc/1100168/LegalMedicalRecord)
8. [Twilio Pricing](https://www.twilio.com/pricing)
9. [Twilio BAA](https://www.twilio.com/blog/understanding-twilio-baa)
10. [Stripe Terminal](https://stripe.com/terminal)