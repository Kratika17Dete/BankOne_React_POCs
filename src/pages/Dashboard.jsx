import { IonPage, IonContent } from "@ionic/react";
import { useState } from "react";

import HeaderSheet from "../components/HeaderSheet";
import SegmentTabs from "../components/SegmentTabs";
import CardCarousel from "../components/CardCarousel";
import BeneficiaryGrid from "../components/BeneficiaryGrid";
import BeneficiaryDetail from "../components/BeneficiaryDetail";
import AccountOverview from "../components/AccountOverview";
import ProfileContent from "../components/ProfileContent";
import BubbleNavigation from "../components/BubbleNavigation";
import CoverFlowNavigation from "../components/CoverFlowNavigation";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("cards");
  const [selectedBeneficiary, setSelectedBeneficiary] =
    useState(null);

  const [showProfile, setShowProfile] =
    useState(false);

  return (
    <IonPage>
      <IonContent fullscreen scrollY={false}>
        <div className="relative min-h-screen bg-[#EEF0F2] overflow-x-hidden">

          {/* Header */}
          <div className="absolute top-0 left-0 right-0 z-[999]">
            <HeaderSheet
              onProfileClick={() =>
                setShowProfile(!showProfile)
              }
            />
          </div>

          <div className="pt-[100px] max-w-[1440px] mx-auto">

            {/* Desktop Profile */}
      {showProfile ? (
  <div className="max-w-[1400px] mx-auto px-4 mt-6">
    <ProfileContent />
  </div>
) : (
              <>
          <div className="px-4 lg:px-6 mt-4">
                  <SegmentTabs
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                  />
                </div>

                <div className="pb-6">
                  {activeTab === "cards" && (
                    <CardCarousel />
                  )}

                  {activeTab === "transfers" &&
                    !selectedBeneficiary && (
                      <BeneficiaryGrid
                        onSelect={setSelectedBeneficiary}
                      />
                    )}

                  {activeTab === "transfers" &&
                    selectedBeneficiary && (
                      <BeneficiaryDetail
                        beneficiary={selectedBeneficiary}
                        onBack={() =>
                          setSelectedBeneficiary(null)
                        }
                      />
                    )}

                  {activeTab === "bills" && (
                    <div className="px-4 mt-4">
                      <div className="bg-white rounded-[28px] p-6">
                        Bills Coming Soon
                      </div>
                    </div>
                  )}

                  <AccountOverview />
                </div>
              </>
            )}
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
}

// export default function Dashboard() {

// return <BubbleNavigation />;
// }