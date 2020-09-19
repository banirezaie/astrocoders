import React from "react";

const ModuleLessonSelect = ({ selectedModule, selectedLesson, setSelectedLesson}) => {
    const changeHandler = (event) => {
        setSelectedLesson(
            event.target.selectedIndex === 0
                ? null
                : selectedModule.lesson[event.target.selectedIndex - 1]
        );
    };
    return (
        <div className="col-12">
            <label htmlFor="class">Lesson</label>
            <select
                id="class"
                className="form-control"
                onChange={changeHandler}
                disabled={!selectedModule}
            >
                <option>Choose a Lesson </option>
                {selectedModule &&
                    selectedModule.lesson.map((element, index) => {
                        return <option key={index}>{element.name}</option>;
                    })}
            </select>
        </div>
    );
};

export default ModuleLessonSelect;
