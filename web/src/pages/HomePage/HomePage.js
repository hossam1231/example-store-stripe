import styled from 'styled-components'
import NewsList from 'src/components/Newsletter Section/NewsList'
import ProductsCell from 'src/components/ProductsCell'

const HomePage = () => {
  return (
    <Wrapper>
      <article>
        <img className="w-24 h-24" src='https://cdn.discordapp.com/attachments/1015719580385153110/1056017368104570960/IMG_1081.JPG'/>
        <h2> </h2>
        <NewsList/>
        <Description>
          These are single-use tokens. Great for emergencies and gifts.
        </Description>
        <ProductsCell />
      </article>
    </Wrapper>
  )
}

export default HomePage

// Styles

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  gap: calc(var(--padding) * 2);
`

const Description = styled.p`
  margin-bottom: var(--padding);
`
