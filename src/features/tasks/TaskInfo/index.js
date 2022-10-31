import Container from "../../../common/Container";
import Section from "../../../common/Section";
import Paragraph from "../../../common/Paragraph";

import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTaskById } from "../tasksSlice";

const TaskInfo = () => {
    const { id } = useParams();
    const tasks = useSelector(state => getTaskById(state, id));

    return (
        <Container>
            <Section
                title={tasks.title}
                body={
                    <Paragraph description={tasks.content} />
                }
            />
        </Container>
    );

};

export default TaskInfo;