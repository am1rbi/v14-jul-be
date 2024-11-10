import React from 'react';
import SocialProofSection from './SocialProofSection';
import TextCarousel from './TextCarousel';

interface HeroSectionProps {
  openFunnelModal: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ openFunnelModal }) => {
  return (
    <section className="hero-section">
      <div className="content-section">
        <div className="text-content">
          <div className="hero-title-container">
            <h1 className="main-title">יש דרך חדשה לרכוש</h1>
            <div className="carousel-container">
              <TextCarousel />
            </div>
          </div>
          
          <p className="text-lg leading-relaxed" dir="rtl">
            <span className="whitespace-normal md:whitespace-nowrap inline-block">
              כמה קליקים והצוות שלנו יתחיל לחפש את התכשיט המושלם, המותאם והמדויק עבורכם.
            </span>
            <br />
            תחסכו זמן, אנרגיה וכסף - ללא עלות או התחייבות.
          </p>

          <div className="cta-buttons">
            <button 
              className="continue-button" 
              onClick={openFunnelModal}
              type="button"
            >
              לחצו כאן כדי להתחיל
            </button>
          </div>

          <SocialProofSection />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;