import { useSelector, useDispatch } from "react-redux"
import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom"
import { filterCards, orderCards } from "../../redux/actions"
import Card from "../Card/Card"
import styles from './Favorites.module.css'

const Container = styled.div`
z-index: -1;
width: 1250px;
position: absolute;
top: 10rem;
left: 10%;
display: grid;
grid-gap: 0.5rem;
grid-template-columns: 1fr 1fr;
grid-auto-flow: dense;
padding: 3rem;
background-color: #ffffffc3;
border-radius: 1rem;
padding-top: 7rem;
`

const Favorites = () => {
    const { myFavorites } = useSelector(state => state)
    const dispatch = useDispatch()

    const handlerOrder = (event) => {
        dispatch(orderCards(event.target.value))
    }
    const handlerFilter = (event) => {
        dispatch(filterCards(event.target.value))
    }

    return (
        <div className={styles.divFavs}>
            <div className={styles.filterDiv}>
                <h4>Filter your favorites here!</h4>
                <select onChange={handlerOrder} className={styles.selectStyled}>
                    <option value="order" disabled='disabled'>Order By</option>
                    <option value="Ascendente">Ascendente</option>
                    <option value="Descendente">Descendente</option>
                </select>
                <select onChange={handlerFilter} className={styles.selectStyled}>
                    <option value="filter" disabled='disabled'>Filter By</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="unknown">Unknown</option>
                    <option value="Genderless">Genderless</option>
                </select>
            </div>

                <h1>Favorite cards</h1>
            <Container>
                {
                    myFavorites.map((character) => {
                        return (
                            <Card
                                key={character.id}
                                name={character.name}
                                species={character.species}
                                gender={character.gender}
                                image={character.image}
                                id={character.id}
                            />
                        )
                    })
                }
            </Container>
        </div>
    )
}

export default Favorites