import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch"


export const MultipleCustomHooks = () => {
  const { counter, increment, decrement } = useCounter(1);
  const { data, isLoading, hasError } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
  console.log('counter', counter)
  const { author, quote } = !!data && data[0]
  console.log({ data, isLoading, hasError })


  return (
    <>
      <h1>Breaking Bad Quotes
      </h1>
      <hr />

      {isLoading ? (<div className="alert alert-info text-center">...Loading</div>)
        : (<blockquote className="blockquote text-end" style={{display:'flex'}}>

          <p className="mb-1">{quote}</p>
          <footer className="blockquote-footer" >{author}</footer>
        </blockquote>)
      }
      <button disable={isLoading} className="btn btn-primary" onClick={() => decrement()}>Previous Quote</button>
      <button disable={isLoading} className="btn btn-primary" onClick={() => increment()}>Next Quote</button>
      
<img className="mt-2" src='https://www.looper.com/img/gallery/the-most-powerful-character-in-breaking-bad-might-surprise-you/intro-1617115517.jpg' alt='' />


    </>
  )
}
