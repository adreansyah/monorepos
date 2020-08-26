import React, { useState, useEffect } from "react";
import { text, object } from "@storybook/addon-knobs";
import { ButtonGroup, Button } from "../../Components/Atom";
import { ProgressTracker } from "../../Components/Molecules";

export default {
  title: "Molecules/ProgressTracker",
  component: ProgressTracker
};

const steps = [
  {
    key: "A",
    label: "Profil Diri",
    desc: "Lorem ipsum dolor sit amet consecteteur adipicising"
  },
  {
    key: "B",
    label: "Riwayat Pekerjaan",
    desc:
      "Lorem ipsum dolor sit amet consecteteur adipicising sit amet consecteteur adipicising"
  },
  {
    key: "C",
    label: "Riwayat Pendidikan",
    desc: "Lorem ipsum dolor sit amet consecteteur adipicising"
  },
  {
    key: "D",
    label: "Sertifikasi",
    desc: "Lorem ipsum dolor sit amet consecteteur adipicising"
  }
];

const stepsObject = () => object("steps", steps);

let keys = [];
steps.map((item, idx) => {
  const k = Object.values(steps)[idx].key;
  return keys.push(k);
});
keys.push("finish");

export const __ProgressTracker = () => {
  const [step, setStep] = useState("A");

  useEffect(() => {
    setStep(text("activeStepKey", step));
  }, []);

  useEffect(() => {
    setStep(text("activeStepKey"));
  }, [text("activeStepKey", step)])

  return (
    <>
      <div>
        <ProgressTracker divider={50} style={{ width: 250 }} step={step}>
          {stepsObject().map(step => (
            <ProgressTracker.Item key={step.key} label={step.label}>
              {step.desc}
            </ProgressTracker.Item>
          ))}
        </ProgressTracker>
      </div>
    </>
  );
};

export const __ProgressTrackerInline = () => {
  const [step, setStep] = useState("A");

  useEffect(() => {
    setStep(text("activeStepKey", step));
  }, []);

  useEffect(() => {
    setStep(text("activeStepKey"));
  }, [text("activeStepKey", step)]);

  return (
    <>
      <div>
        <ProgressTracker
          inline
          divider={100}
          style={{ height: 150 }}
          step={step}
        >
          {stepsObject().map(step => (
            <ProgressTracker.Item key={step.key} label={step.label}>
              {step.desc}
            </ProgressTracker.Item>
          ))}
        </ProgressTracker>
      </div>
    </>
  );
};
