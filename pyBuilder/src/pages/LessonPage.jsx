import { useParams, useNavigate } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
import LessonStep from "../components/LessonStep";

import { datatypesLesson } from "../data/dataTypeLessons";
import { conditionalsLesson } from "../data/conditionalsLesson";
import { loopsLesson } from "../data/loopsLesson";

const lessonMap = {
  datatypes: datatypesLesson,
  conditionals: conditionalsLesson,
  loops: loopsLesson,
};

const lessonOrder = ["datatypes", "conditionals", "loops"];

export default function LessonPage() {
  const { lessonId } = useParams();
  const navigate = useNavigate();

  const lesson = lessonMap[lessonId];

  if (!lesson) {
    navigate("/course/datatypes");
    return null;
  }

  const goToNextLesson = () => {
    const index = lessonOrder.indexOf(lessonId);
    const next = lessonOrder[index + 1];
    if (next) {
      navigate(`/course/${next}`);
    }
  };

  return (
    <AppLayout>
      <div className="px-8 py-10">
        <LessonStep
          lesson={lesson}
          onLessonComplete={goToNextLesson}
        />
      </div>
    </AppLayout>
  );
}
