import React from 'react';
import Hero from '../components/home/Hero';
import FeatureCards from '../components/home/FeatureCards';
import FlowOverviewSection from '../components/home/FlowOverviewSection';
import QuickInfoSection from '../components/home/QuickInfoSection';
import DisclaimerBanner from '../components/layout/DisclaimerBanner';

export default function Home() {
  return (
    <div>
      <Hero />
      <FeatureCards />
      <FlowOverviewSection />
      <QuickInfoSection />

      <div className="container" style={{ paddingBottom: '2rem' }}>
        <DisclaimerBanner />
      </div>
    </div>
  );
}
