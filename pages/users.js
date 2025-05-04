import Link from "next/link";
import MainContainer from "../components/MainContainer";



const Users = ({users}) => {

    return (
        <MainContainer keywords={"Users page"}>
            <h1>Список пользователей</h1>
            <ul>
                {users.map(user => 
                    <Link key={user.id} href={`/users/${user.id}`}>
                        <li>{user.name}</li>
                    </Link>
                )}
            </ul>
        </MainContainer>
    );
};

export default Users;


// Так должен выглядеть запрос с сервера и передачей данных с ответа в компонент 
export const getStaticProps = (async (context) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await res.json()
    return { 
        props: { users }
    }
})