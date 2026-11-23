// Card recebe a prop "numero" por desestruturação e a exibe no título.
function Card({ numero }) {
  return (
    <article className="card">
      <h2>Card {numero}</h2>
      <p>Este é o cartão número {numero}, renderizado pelo mesmo componente Card.</p>
    </article>
  )
}

export default Card
