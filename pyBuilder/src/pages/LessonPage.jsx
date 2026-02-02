// import { useState } from "react";
// import LessonStep from "../components/LessonStep";
// import stringLessons from "../data/dataTypesLessons";

// export default function LessonPage() {
//   const [currentStep, setCurrentStep] = useState(0);

//   const handleCorrect = () => {
//     setCurrentStep((prev) => prev + 1);
//   };

//   if (currentStep >= stringLessons.length) {
//     return (
//       <div className="text-center mt-20 text-green-400 text-2xl">
//         🎉 Strings lesson completed!
//       </div>
//     );
//   }

//   return (
//     <LessonStep
//       step={stringLessons[currentStep]}
//       onCorrect={handleCorrect}
//     />
//   );
// }

import LessonStep from "../components/LessonStep";
import { datatypesLesson } from "../data/dataTypeLessons";

export default function LessonPage() {
  return <LessonStep lesson={datatypesLesson} />;
}
