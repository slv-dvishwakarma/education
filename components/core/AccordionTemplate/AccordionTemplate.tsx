"use client"
import React, { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

type Accordion = {
  question: string;
  answer: string;
};

type AccordionTemplateProps = {
  content: Accordion[];
};

export const AccordionTemplate = ({ content }: AccordionTemplateProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <Accordion type="single" collapsible className="w-full">
      {content.map((item, index) => (
        <AccordionItem key={index} value={String(index)} onClick={() => setActiveIndex(index)}>
          <AccordionTrigger
            className={`text-[16px] hover:no-underline text-left ${activeIndex === index ? 'text-primary' : ''}`}
          >
            {item.question}
          </AccordionTrigger>
          <AccordionContent>{item.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
