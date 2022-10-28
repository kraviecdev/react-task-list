import Container from "../../../common/Container";
import Section from "../../../common/Section";

import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTaskById } from "../tasksSlice";

const TaskInfo = () => {
    const { id } = useParams();
    const tasks = useSelector(state => getTaskById(state, id));

    return (
        <Container>
            <Section
                title={tasks.content}
                body={<>{tasks.id}</>}
            />
        </Container>
    );

};

export default TaskInfo;