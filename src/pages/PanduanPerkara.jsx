import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePortal } from '../context/PortalContext';
import ProgressBar from '../components/wizard/ProgressBar';
import QuestionCard from '../components/wizard/QuestionCard';
import WizardControls from '../components/wizard/WizardControls';
import DisclaimerBanner from '../components/layout/DisclaimerBanner';
import { Compass, Sparkles } from 'lucide-react';

export default function PanduanPerkara() {
  const {
    currentStep,
    currentNode,
    historyStack,
    answers,
    selectOption,
    goToPreviousStep,
    restartWizard,
    setActiveCaseType,
    setCalcCase
  } = usePortal();

  const navigate = useNavigate();

  // If the node reached is a result node, navigate to /hasil-panduan
  useEffect(() => {
    if (currentNode && currentNode.isResult) {
      let targetCase = currentNode.targetPerkaraId;
      if (typeof currentNode.dynamicPerkaraId === 'function') {
        targetCase = currentNode.dynamicPerkaraId(answers);
      }
      if (targetCase) {
        setActiveCaseType(targetCase);
        setCalcCase(targetCase);
      }
      navigate('/hasil-panduan');
    }
  }, [currentNode, answers, navigate, setActiveCaseType, setCalcCase]);

  const canGoBack = historyStack.length > 1;

  const handleSelect = (option) => {
    selectOption(option);
  };

  return (
    <div className="page-wrapper">
      {/* Top Banner Header */}
      <div className="page-header">
        <div className="page-header-content">
          <div className="page-header-badge">
            <Compass size={14} />
            <span>Sistem Wizard Interaktif</span>
          </div>
          <h1 className="page-header-title">Panduan Alur Perkara Interaktif</h1>
          <p className="page-header-desc">
            Jawab pertanyaan di bawah ini satu per satu. Sistem kami akan memandu langkah demi langkah untuk menentukan jalur hukum, berkas dokumen yang dibutuhkan, serta estimasi biaya perkara.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="wizard-container">
          {/* Progress Indicator */}
          <ProgressBar
            stepNumber={currentNode?.stepNumber || 1}
            totalSteps={currentNode?.totalSteps || 5}
            category={currentNode?.category || "Panduan Keputusan"}
          />

          {/* Interactive Question Card */}
          <QuestionCard
            node={currentNode}
            selectedAnswerId={answers[currentStep]}
            onSelectOption={handleSelect}
          />

          {/* Footer Controls: Back & Restart */}
          <WizardControls
            canGoBack={canGoBack}
            onBack={goToPreviousStep}
            onRestart={restartWizard}
          />

          {/* Help box */}
          <div className="info-box" style={{ marginTop: '2rem' }}>
            <Sparkles size={20} style={{ color: '#0284C7', flexShrink: 0, marginTop: '2px' }} />
            <div>
              <strong style={{ color: '#0C4A6E' }}>Perlu Bantuan dalam Menjawab?</strong>
              <p style={{ margin: 0, fontSize: '0.85rem' }}>
                Jika Anda merasa ragu dengan pilihan tertentu, pilihlah opsi yang paling mendekati kondisi saat ini. Anda dapat kembali ke pertanyaan sebelumnya kapan saja menggunakan tombol di atas tanpa kehilangan jawaban yang telah Anda pilih.
              </p>
            </div>
          </div>

          <DisclaimerBanner />
        </div>
      </div>
    </div>
  );
}
