import React from 'react';
import {
  HeartCrack,
  Users,
  ScrollText,
  User,
  UserCheck,
  UserMinus,
  MapPin,
  HelpCircle,
  CheckCircle2,
  AlertCircle,
  Clock,
  ShieldAlert,
  ArrowRight
} from 'lucide-react';

const ICON_MAP = {
  HeartCrack,
  Users,
  ScrollText,
  User,
  UserCheck,
  UserMinus,
  MapPin,
  HelpCircle,
  CheckCircle2,
  AlertCircle,
  Clock,
  ShieldAlert
};

export default function QuestionCard({ node, selectedAnswerId, onSelectOption }) {
  if (!node) return null;

  return (
    <div className="question-card">
      <div className="question-category-tag">
        <HelpCircle size={15} />
        <span>{node.category || "Panduan Keputusan"}</span>
      </div>

      <h2 className="question-title">{node.question}</h2>

      {node.description && (
        <p className="question-subtitle">{node.description}</p>
      )}

      <div className="options-grid" role="radiogroup" aria-label={node.question}>
        {node.options &&
          node.options.map((option) => {
            const IconComponent = ICON_MAP[option.icon] || CheckCircle2;
            const isSelected = selectedAnswerId === option.id;

            return (
              <button
                key={option.id}
                type="button"
                className={`option-btn ${isSelected ? 'selected' : ''}`}
                onClick={() => onSelectOption(option)}
                role="radio"
                aria-checked={isSelected}
              >
                <div className="option-main">
                  <div className="option-radio-circle" />
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '8px',
                      backgroundColor: isSelected ? '#065F46' : '#E2E8F0',
                      color: isSelected ? '#FFFFFF' : '#334155',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <IconComponent size={20} />
                  </div>
                  <div className="option-text-wrap">
                    <h4>{option.text}</h4>
                    {option.subtext && <p>{option.subtext}</p>}
                  </div>
                </div>

                <div className="option-arrow">
                  <ArrowRight size={20} />
                </div>
              </button>
            );
          })}
      </div>
    </div>
  );
}
