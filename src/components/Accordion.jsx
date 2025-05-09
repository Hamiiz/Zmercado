import { useState } from 'react';



export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(null);
  const contents = [
    {
        title: "History",
        content: "Almaty was founded in 1854 as a Russian military outpost called Verny. It grew rapidly and became a major cultural and economic center."
    },
    {
        title: "About",
        content: "With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city."
    },
    {
        title: "Etymology",
        content: "The name comes from алма, the Kazakh word for 'apple' and is often translated as 'full of apples'. In fact, the region surrounding Almaty is thought to be the ancestral home of the apple, and the wild Malus sieversii is considered a likely candidate for the ancestor of the modern domestic apple."
    }
]
    let panels = contents.map(content =>{
        let index= contents.indexOf(content)
        return(
        <Panel key={index}
        title={content.title}
        isActive={activeIndex === index}
        onShow={() => setActiveIndex(index)}
      > {content.content}</Panel>)
    })
  return (
    <>
      <h2>Almaty, Kazakhstan</h2>
      <ul>
        {panels}
      </ul>
      
    </>
  );
}

function Panel({
  title,
  children,
  isActive,
  onShow
}) {
  return (
    <section className="panel">
      <h3>{title}</h3>
      {isActive ? (
        <p>{children}</p>
      ) : (
        <button onClick={onShow}>
          Show
        </button>
      )}
    </section>
  );
}