import React from 'react';
import './ContentSection.scss';

interface ContentSectionProps {
  title: string;
  subTitle: string;
  wrapperClass: string;
  children: React.ReactNode;
}

const ContentSection: React.FC<ContentSectionProps> = ({ 
  title, 
  subTitle, 
  wrapperClass, 
  children 
}) => {
  return (
    <section className={wrapperClass}>
      <div className="content">
        <div className="content-title">
          <h2>{title}</h2>
          <span className="section-sub-title">{subTitle}</span>
        </div>
        {children}
      </div>
    </section>
  );
};

export default ContentSection;
