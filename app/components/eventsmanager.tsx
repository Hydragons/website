'use client';
interface CardProps {
    imgUrl: string;
    imgTitle: string;
    title: string;
    excerpt: string;
    likes: number;
 }

 export default function Card(props: CardProps) {

    function print(props: CardProps) {
        console.log(`This is the image title: ${props.title}`)
    }

    const TODAY = "today";
    const WEEK = "this week";
    const NEXT_WEEK = "next week";
    const MONTH = "this month";
    const NEXT_MONTH = "next month";
    const ALL = "all";

    const timeRanges: string[] = [TODAY, WEEK, NEXT_WEEK, MONTH, NEXT_MONTH, ALL]

    const timeCards = timeRanges.map((timeRange, index) => (
        <div key={index}>
          <h2>{timeRange}</h2>
        </div>
      ));

     return (
           <div onClick={() => print(props)}>
             <img src={props.imgUrl} alt={props.imgTitle} />
              <h1>{props.title}</h1>
              <p>{props.excerpt}</p>
              <p>{props.likes}</p>
                <div>
                    {timeCards}
                </div>
           </div>
          )
  }
