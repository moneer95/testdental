'use client';

import React, { useState } from 'react';
import { GoPlusCircle } from 'react-icons/go';
import { FiMinusCircle } from "react-icons/fi";

function Faq() {
    // FAQ data
    const faqData = [
        {
            question: "What's is the structure of ORE 1?",
            answer: `
                It consists of two computer-based exam papers:
                - Paper A covers clinically applied dental science and clinically applied human disease.
                - Paper B covers aspects of clinical dentistry, including law and ethics and health and safety.
                Each paper lasts three hours and is made up of multiple short answer questions (extended matching questions and single best answer questions).
            `,
        },
        {
            question: "Where is the exam based and how much does it cost?",
            answer: `
                Preparing for the ORE 1 exam involves reviewing clinically applied dental science, understanding human disease, and practicing multiple-choice and scenario-based questions.
                Use study guides and attend preparatory courses if necessary.
            `,
        },
        {
            question: "When is the ORE conducted?",
            answer: `
                Yes, candidates can retake the ORE 1 exam if they fail, but there may be a limit on the number of attempts. Check with the exam board for specific retake policies.
            `,
        },
        {
            question: "How can I apply for the exam?",
            answer: `
                Yes, candidates can retake the ORE 1 exam if they fail, but there may be a limit on the number of attempts. Check with the exam board for specific retake policies.
            `,
        },
        {
            question: "Where is the exam based and how much does it cost?",
            answer: `
                Yes, candidates can retake the ORE 1 exam if they fail, but there may be a limit on the number of attempts. Check with the exam board for specific retake policies.
            `,
        },
        {
            question: "What’s is the difference between ORE & LDS?",
            answer: `
                Yes, candidates can retake the ORE 1 exam if they fail, but there may be a limit on the number of attempts. Check with the exam board for specific retake policies.
            `,
        },
        {
            question: "Do you recommend I book ORE or LDS?",
            answer: `
                Yes, candidates can retake the ORE 1 exam if they fail, but there may be a limit on the number of attempts. Check with the exam board for specific retake policies.
            `,
        },
        {
            question: "How long do I need to prepare for the exam?",
            answer: `
                Yes, candidates can retake the ORE 1 exam if they fail, but there may be a limit on the number of attempts. Check with the exam board for specific retake policies.
            `,
        },
        {
            question: "Which books do you recommend I use for ORE- LDS preparation?",
            answer: `
                Yes, candidates can retake the ORE 1 exam if they fail, but there may be a limit on the number of attempts. Check with the exam board for specific retake policies.
            `,
        },
        {
            question: "How does ORE and LDS preparation differ?",
            answer: `
                Yes, candidates can retake the ORE 1 exam if they fail, but there may be a limit on the number of attempts. Check with the exam board for specific retake policies.
            `,
        },
        {
            question: "Do I need to enrol onto a preparatory course for ORE1 or LDS1?",
            answer: `
                Yes, candidates can retake the ORE 1 exam if they fail, but there may be a limit on the number of attempts. Check with the exam board for specific retake policies.
            `,
        },
        {
            question: "I am not comfortable studying from the online platform, can I get the notes printed as a hard copy?",
            answer: `
                Yes, candidates can retake the ORE 1 exam if they fail, but there may be a limit on the number of attempts. Check with the exam board for specific retake policies.
            `,
        },
    ];

    // State to manage which FAQ is open
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    // Toggle the specific FAQ
    const handleToggle = (index: number) => {
        setOpenFaq((prev) => (prev === index ? null : index));
    };

    return (
        <div>
            <h2 className="text-[32px] font-semibold text-center mt-[10%]">
                Frequently Asked Questions
            </h2>

            <div className="max-w-[789px] w-full max-sm:px-4 mx-auto mt-6">
                {faqData.map((faq, index) => (
                    <div
                        key={index}
                        className="border border-gray-200 p-5 rounded-md cursor-pointer mb-4"
                        onClick={() => handleToggle(index)}
                    >
                        <div className="flex justify-between items-center gap-16">
                            <p className={`text-[14px] 2xl:text-[16px] font-medium ${openFaq === index ? 'text-primaryPurple' : 'text-primaryGray'}`}>
                                {faq.question}
                            </p>

                            {openFaq === index ? (
                                <div className="w-[18px] h-[18px]">
                                    <FiMinusCircle
                                        size={18}
                                        className="text-primaryGray"
                                    />
                                </div>
                            ) : (
                                <div>
                                    <GoPlusCircle
                                        size={18}
                                        className="text-primaryGray"
                                    />
                                </div>
                            )}
                        </div>
                        {openFaq === index && (
                            <div className="text-primaryGray pt-2 text-[14px] font-medium space-y-3">
                                <p>
                                    {faq.answer.split('\n').map((line, i) => (
                                        <React.Fragment key={i}>
                                            {line.trim() && (
                                                <span>
                                                    {line.trim()}
                                                    <br />
                                                </span>
                                            )}
                                        </React.Fragment>
                                    ))}
                                </p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Faq;
