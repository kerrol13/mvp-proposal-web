const OtherCost = ({ isEditing }) => {
  const baseTopClass = isEditing ? "" : "-top-2";

  return (
    <div
      className={`${
        isEditing ? "-translate-y-[65rem]" : "-translate-y-[66rem]"
      } mx-[52px] font-medium justify-between break-words font-poppins space-y-3 text-[9pt] w-[87%]  text-[#08263d]`}
    >
      <h1
        suppressContentEditableWarning={true}
        contentEditable="plaintext-only"
        className={`text-[24.71pt] relative font-bold ${baseTopClass}`}
      >
        Fees and Other Costs
      </h1>
      <div className="flex gap-x-[51px] items-start">
        <div className="gap-4 grid max-w-[313px] w-[313px] ">
          <p
            suppressContentEditableWarning={true}
            contentEditable="plaintext-only"
          >
            Below are the types of fees and other costs of hiring an offshore
            MVP staff. These fees are not charged until Offshore MVP
            successfully hires the role you are looking for.
          </p>
          <div style={{ margin: 0 }}>
            <h1
              suppressContentEditableWarning={true}
              contentEditable="plaintext-only"
              className="font-bold text-[13.25pt] text-[#2baaf9] mb-1 "
            >
              Service Fee
            </h1>
            <p
              suppressContentEditableWarning={true}
              contentEditable="plaintext-only"
            >
              The monthly service fee covers a variety of essential support and
              services for your offshore staff. This includes payroll, HR and
              Client Experience support, IT support, administrative overhead,
              super fast internet connection, and employee engagement
              activities. The monthly service fee is designed to support and
              streamline your staff's work environment.
            </p>
          </div>
        </div>
        <div
          style={{ margin: 0 }}
          className="gap-4 grid max-w-[313px] w-[313px]"
        >
          <div>
            <h1
              suppressContentEditableWarning={true}
              contentEditable="plaintext-only"
              className="font-bold text-[13.25pt] text-[#2baaf9] mb-1"
            >
              Security Bond
            </h1>
            <p
              suppressContentEditableWarning={true}
              contentEditable="plaintext-only"
            >
              The security bond is equivalent to one (1) month of service fees
              per dedicated Team Member. This ensures employee entitlements in
              the event that they are terminated from their employment, or the
              Client decides to disengage from their staff's services.
            </p>
          </div>
          <div>
            <h1
              suppressContentEditableWarning={true}
              contentEditable="plaintext-only"
              className="font-bold text-[13.25pt] text-[#2baaf9] mb-1"
            >
              Recruitment & Onboarding Fee
            </h1>
            <p
              suppressContentEditableWarning={true}
              contentEditable="plaintext-only"
            >
              A one-off recruitment & onboarding fee is payable upon acceptance
              of your dedicated resource. This covers the technology that your
              offshore staff will use, plus the advertisement of your role on
              job portal sites, social media channels, and other platforms where
              the Talent Acquisition team gathers applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OtherCost;
