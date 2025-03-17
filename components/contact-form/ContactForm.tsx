'use client';
import React, { memo, useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import Button from '../button';
import Input from '../form/Input';
import dynamic from 'next/dynamic';

const LottieAnimation = dynamic(() => import('../animations/LottieAnimation'), {
    ssr: false
})

interface FormData {
    firstName: string;
    email: string;
}

const LogoAnimation = memo(() => (
    <div className="flex items-center justify-center w-full">
        <LottieAnimation
            importAnimation={(cb) =>
                import('@/lib/lotties/JB2G.json').then(cb)
            }
            lottieProps={{
                style: { height: 40 },
                autoplay: true,
            }}
        />
    </div>
));

const steps = [
    {
        title: 'Let’s start with the basics. \nType in your first name.',
        input: {
            type: 'text',
            name: 'firstName',
            placeholder: 'First name',
        },
    },
    {
        title: 'How should we contact you? \nType in your email address.',
        input: {
            type: 'email',
            name: 'email',
            placeholder: 'Email address',
        },
    },
    {
        title: `Thanks, <Name>! Now, it’s time to get a reality check. \n\n This will take 2-3 minutes.`,
        input: {
            type: 'button',
            text: 'Continue',
        },
    },
];

const ContactForm: React.FC = () => {
    const [step, setStep] = useState(0);
    const formData = useRef<FormData>({
        firstName: '',
        email: '',
    });

    const inputRef = useRef<HTMLInputElement>(null);
    const stepRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (stepRef.current) {
            gsap.fromTo(
                stepRef.current,
                { opacity: 0 },
                { opacity: 1, duration: 0.5 }
            );
        }
    }, [step]);

    const handleNext = () => {
        if (inputRef.current) {
            if (inputRef.current.value && step < steps.length - 1) {
                inputRef.current.value = '';
                gsap.to(stepRef.current, {
                    opacity: 0,
                    duration: 0.5,
                    onComplete: () => setStep((prev) => prev + 1),
                });
            }
        }
    };

    const currentStep = steps[step];

    return (
        <div className="relative flex items-center w-full flex-col">
            <LogoAnimation />

            <div ref={stepRef} className="w-full text-center mt-5">
                <h1 className='whitespace-break-spaces p-4'>{currentStep.title.replace('<Name>', formData.current.firstName)}</h1>

                <div className="fixed bottom-3 w-full p-4">
                    {currentStep.input.type === 'button' ? (
                        <Button variant="secondary" onClick={handleNext}>
                            {currentStep.input.text}
                        </Button>
                    ) : (
                        <Input
                            id={`input-${step}`}
                            placeholder={currentStep.input.placeholder}
                            name={currentStep.input.name}
                            onButtonClick={handleNext}
                            onChange={(e) => {
                                formData.current = {
                                    ...formData.current,
                                    [e.target.name]: e.target.value,
                                };
                            }}
                            type={currentStep.input.type}
                            ref={inputRef}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
