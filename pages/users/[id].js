import { useRouter } from "next/router"
import stl from '../../styles/User.module.scss'
import MainContainer from "../../components/MainContainer"

export default function ({user}) {
    // Получение данных из парметров адресной строки
    const {query} = useRouter()
    return (
        <MainContainer keywords={user.name}>
            <div className={stl.user}>
                <h1>Пользователь с id {query.id}</h1>
                <div>Имя пользователя {user.name}</div>
            </div>
        </MainContainer>
    )
}

export const getServerSideProps = (async ({params}) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const user = await res.json()
    return { 
        props: { user }
    }
})