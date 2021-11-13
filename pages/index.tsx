import {Button, Htag, Input, P, Rating, Tag, Textarea} from "../components";
import {useState} from "react";
import {withLayout} from "../layout/Layout";
import {GetStaticProps} from "next";
import axios from "axios";
import {MenuItem} from "../interfaces/menu.interface";

function Home({menu}: HomeProps): JSX.Element {

    const [rating, setRating] = useState<number>(4)

    return (
        <>
            <Htag tag='h1'>Заголовок</Htag>
            <Button appearance="primary" arrow="right">Кнопка</Button>
            <Button appearance="ghost" arrow="down">Кнопка</Button>
            <P size={"l"}>Большой</P>
            <P>Средний</P>
            <P size={"s"}>Маленький</P>
            <Tag size={"s"}>smtag</Tag>
            <Tag size={"m"} color={"red"}>red</Tag>
            <Tag size={"s"} color={"green"}>green</Tag>
            <Tag color={"primary"}>smtag</Tag>
            <Rating rating={rating} isEditable setRating={setRating}/>
            {/*<Input placeholder='qwerty'/>*/}
            {/*<Textarea placeholder='qwerty'/>*/}
        </>
    );
}

export default withLayout(Home)

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
    const firstCategory = 0;
    const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
        firstCategory
    });
    return {
        props: {
            menu,
            firstCategory
        }
    }
}

interface HomeProps extends Record<string, unknown>{
    menu: MenuItem[];
    firstCategory: number;
}