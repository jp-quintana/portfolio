import Hero from '@/components/Home/Hero';
import ProjectList from '@/components/Home/ProjectList';
import About from '@/components/Home/About';
import Contact from '@/components/Home/Contact';

export default function Home(props) {
  return (
    <>
      <Hero />
      <ProjectList projects={props.projects} />
      <About />
      <Contact />
    </>
  );
}

export async function getStaticProps() {
  const projects = [
    {
      id: '1',
      name: 'react-shopping-cart',
      images: [
        { id: '1', src: 'images/flaakko-1.jpg' },
        { id: '2', src: 'images/flaakko-2.jpg' },
        { id: '3', src: 'images/flaakko-3.jpg' },
        { id: '4', src: 'images/flaakko-4.jpg' },
        { id: '5', src: 'images/flaakko-5.jpg' },
      ],
      details: {
        name: 'flaakko',
        description: '',
        features: [
          { id: '1', name: 'cart functionality' },
          { id: '2', name: 'basic inventory tracker' },
          { id: '3', name: 'auth (email/password & anonymous)' },
          { id: '4', name: 'mock checkout page' },
          { id: '5', name: 'user orders' },
        ],
        buttons: [
          {
            id: '1',
            content: 'code',
            href: 'https://github.com/jp-quintana/react-shopping-cart',
          },
          {
            id: '2',
            content: 'live demo',
            href: 'https://flaakko-v2.web.app/',
          },
        ],
      },
    },
    {
      id: '2',
      name: 'mern-note-app',
      images: [
        { id: '1', src: 'images/notion-1.jpg' },
        { id: '2', src: 'images/notion-2.jpg' },
        { id: '3', src: 'images/notion-1.jpg' },
        { id: '4', src: 'images/notion-2.jpg' },
      ],
      details: {
        name: 'flaakko',
        description: '',
        features: [
          { id: '1', name: 'Create/Save Notes' },
          { id: '2', name: 'WIP' },
        ],
        buttons: [
          {
            id: '1',
            content: 'code',
            href: 'https://github.com/jp-quintana/mern-note-app',
          },
          {
            id: '2',
            content: 'live demo soon',
            href: '',
          },
        ],
      },
    },
  ];

  return { props: { projects } };
}
