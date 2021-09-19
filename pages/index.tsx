import {Button, Htag, P, Tag} from "../components";

export default function Home(): JSX.Element {
    return (
        <>
            <Htag tag='h1'>Текст</Htag>
            <Button appearance="primary" arrow="right">Кнопка</Button>
            <Button appearance="ghost" arrow="down">Кнопка</Button>
            <P size={"l"}>Большой</P>
            <P size={"m"}>Средний</P>
            <P size={"s"}>Маленький</P>
            <Tag size={"s"}>smtag</Tag>
            <Tag size={"m"} color={"red"}>red</Tag>
            <Tag size={"s"} color={"green"}>green</Tag>
            <Tag color={"primary"}>smtag</Tag>
        </>
    );
}
