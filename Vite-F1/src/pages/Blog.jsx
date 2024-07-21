import React from 'react';
import '../App.css';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Rise of Max Verstappen',
      date: 'July 20, 2024',
      content: `
        Max Verstappen has been on an incredible journey in Formula 1. From his debut at a young age to becoming the world champion, his career is a testament to his talent and determination. Verstappen's aggressive driving style and strategic brilliance have made him a force to be reckoned with on the track.
        
        Verstappen's rise to fame began with his debut in 2015, where he quickly showed his potential. His first win came in 2016 at the Spanish Grand Prix, making him the youngest winner in F1 history. Since then, he has continued to break records and achieve new milestones.
        
        In 2021, Verstappen clinched his first world championship, ending Mercedes' dominance. His rivalry with Lewis Hamilton has been one of the most thrilling aspects of modern F1, providing fans with unforgettable moments. Looking forward, Verstappen aims to continue his success and further establish his legacy in the sport.
      `,
      author: 'John Doe',
    },
    {
      id: 2,
      title: 'Lando Norris: A New Star in F1',
      date: 'July 18, 2024',
      content: `
        Lando Norris is quickly becoming a fan favorite in Formula 1. With his charismatic personality and impressive driving skills, Norris has won the hearts of many. Driving for McLaren, he has shown consistent performance and potential for greatness.
        
        Norris made his F1 debut in 2019 and has since been a consistent points scorer. His first podium came in 2020 at the Austrian Grand Prix, where he finished third. Known for his humor and positive attitude, Norris is also a popular figure on social media, engaging with fans and sharing his journey.
        
        Beyond his on-track performance, Norris is involved in various charitable activities and initiatives, making him a role model for young fans. As he continues to grow and develop as a driver, the future looks bright for this young talent.
      `,
      author: 'Jane Smith',
    },
    {
      id: 3,
      title: 'Charles Leclerc: The Journey to the Top',
      date: 'July 15, 2024',
      content: `
        Charles Leclerc’s career has been nothing short of spectacular. From his early days in karting to his current status as a leading driver for Ferrari, Leclerc has demonstrated immense skill and dedication.
        
        Leclerc joined Ferrari in 2019, and his impact was immediate. He secured multiple pole positions and victories, quickly establishing himself as a top contender. His ability to extract maximum performance from the car and his strategic acumen have been key factors in his success.
        
        One of Leclerc's standout seasons was 2022, where he fought for the championship until the very end. His rivalry with Verstappen provided fans with thrilling races and dramatic moments. Leclerc's determination to bring Ferrari back to the top is unwavering, and his journey is a source of inspiration for many.
        
        Outside the track, Leclerc is known for his humble nature and dedication to family and fans. He continues to work hard and push the limits, aiming to secure more championships in the future.
      `,
      author: 'James Lee',
    },
  ];

  return (
    <div className="blog">
      {blogPosts.map(post => (
        <div key={post.id} className="blog-post">
          <h2>{post.title}</h2>
          <p><small>{post.date} by {post.author}</small></p>
          <div className="blog-content">
            {post.content.split('\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blog;
