import React, { createContext, useContext, useState, useEffect } from 'react';
import { FLOW_TREE } from '../data/flowData';

const PortalContext = createContext();

const LOCAL_STORAGE_CHECKLIST_KEY = 'pa_portal_checklist_v1';
const LOCAL_STORAGE_WIZARD_KEY = 'pa_portal_wizard_v1';

export function PortalProvider({ children }) {
  // 1. WIZARD STATE
  const [currentStep, setCurrentStep] = useState(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_WIZARD_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.currentStep && FLOW_TREE[parsed.currentStep]) {
          return parsed.currentStep;
        }
      }
    } catch {
      // ignore
    }
    return "start";
  });

  const [historyStack, setHistoryStack] = useState(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_WIZARD_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed.historyStack)) {
          return parsed.historyStack;
        }
      }
    } catch {
      // ignore
    }
    return ["start"];
  });

  const [answers, setAnswers] = useState(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_WIZARD_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.answers) {
          return parsed.answers;
        }
      }
    } catch {
      // ignore
    }
    return {};
  });

  const [activeCaseType, setActiveCaseType] = useState("gugatanCerai");

  // Save wizard state to LocalStorage
  useEffect(() => {
    try {
      localStorage.setItem(
        LOCAL_STORAGE_WIZARD_KEY,
        JSON.stringify({ currentStep, historyStack, answers, activeCaseType })
      );
    } catch {
      // ignore
    }
  }, [currentStep, historyStack, answers, activeCaseType]);

  // Select option in wizard
  const selectOption = (option) => {
    const newAnswers = {
      ...answers,
      [currentStep]: option.id
    };
    setAnswers(newAnswers);

    // Determine target case type if applicable
    if (option.id === "pengaju_istri") {
      setActiveCaseType("gugatanCerai");
    } else if (option.id === "pengaju_suami") {
      setActiveCaseType("ceraiTalak");
    } else if (option.id === "opt_dispensasi") {
      setActiveCaseType("dispensasiNikah");
    } else if (option.id === "opt_waris") {
      setActiveCaseType("waris");
    }

    if (option.next && FLOW_TREE[option.next]) {
      setHistoryStack((prev) => [...prev, option.next]);
      setCurrentStep(option.next);
    }
  };

  // Step back in wizard
  const goToPreviousStep = () => {
    if (historyStack.length > 1) {
      const newStack = [...historyStack];
      newStack.pop(); // remove current
      const prevStep = newStack[newStack.length - 1];
      setHistoryStack(newStack);
      setCurrentStep(prevStep);
    }
  };

  // Restart wizard
  const restartWizard = () => {
    setCurrentStep("start");
    setHistoryStack(["start"]);
    setAnswers({});
    try {
      localStorage.removeItem(LOCAL_STORAGE_WIZARD_KEY);
    } catch {
      // ignore
    }
  };

  // 2. CHECKLIST STATE (with LocalStorage)
  const [checkedDocs, setCheckedDocs] = useState(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_CHECKLIST_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // ignore
    }
    return {};
  });

  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_CHECKLIST_KEY, JSON.stringify(checkedDocs));
    } catch {
      // ignore
    }
  }, [checkedDocs]);

  const toggleDocCheck = (docId) => {
    setCheckedDocs((prev) => ({
      ...prev,
      [docId]: !prev[docId]
    }));
  };

  const resetCaseChecklist = (documentList) => {
    setCheckedDocs((prev) => {
      const next = { ...prev };
      documentList.forEach((d) => {
        delete next[d.id];
      });
      return next;
    });
  };

  // 3. CALCULATOR STATE
  const [calcCase, setCalcCase] = useState("gugatanCerai");
  const [calcRadiusP1, setCalcRadiusP1] = useState("radius_1");
  const [calcRadiusP2, setCalcRadiusP2] = useState("radius_1");

  return (
    <PortalContext.Provider
      value={{
        // Wizard
        currentStep,
        currentNode: FLOW_TREE[currentStep] || FLOW_TREE.start,
        historyStack,
        answers,
        selectOption,
        goToPreviousStep,
        restartWizard,
        activeCaseType,
        setActiveCaseType,

        // Checklist
        checkedDocs,
        toggleDocCheck,
        resetCaseChecklist,

        // Calculator
        calcCase,
        setCalcCase,
        calcRadiusP1,
        setCalcRadiusP1,
        calcRadiusP2,
        setCalcRadiusP2
      }}
    >
      {children}
    </PortalContext.Provider>
  );
}

export function usePortal() {
  const context = useContext(PortalContext);
  if (!context) {
    throw new Error('usePortal must be used within a PortalProvider');
  }
  return context;
}
