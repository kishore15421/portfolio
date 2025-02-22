import { cn } from '@/lib/utils';

export function FeaturesSectionDemo() {
  const features = [
    {
      title: 'React',
      description:
        'React is a JavaScript library for building interactive and fast user interfaces, developed by Facebook, and widely used for front-end development.',
      icon: '/react.png',
    },
    {
      title: 'Next.js',
      description:
        'Next.js is a React-based framework that enables server-side rendering, static site generation, and API routes for fast and scalable applications.',
      icon: '/nextjs.png',
    },
    {
      title: 'HTML',
      description:
        'HTML (HyperText Markup Language) is the standard language for creating web pages and applications, defining the structure of content on the web.',
      icon: '/html.png',
    },
    {
      title: 'CSS',
      description:
        'CSS (Cascading Style Sheets) is used to style HTML elements, providing design, layout, and responsiveness for modern web applications.',
      icon: '/css.png',
    },
    {
      title: 'JavaScript',
      description:
        'JavaScript is a versatile programming language that enables interactive and dynamic behavior in web applications, running both on the client and server.',
      icon: '/js.png',
    },

    {
      title: 'Node.js',
      description:
        'Node.js is a runtime environment that allows JavaScript to be executed on the server, enabling scalable and efficient backend development.',
      icon: '/node.jpeg',
    },
    {
      title: 'MongoDB',
      description:
        'MongoDB is a NoSQL database that stores data in JSON-like documents, providing scalability and flexibility for modern applications.',
      icon: '/mongo.png',
    },
    {
      title: 'Firebase',
      description:
        'Firebase is a cloud-based platform by Google that offers real-time databases, authentication, hosting, and serverless functions for app development.',
      icon: '/firebase.png',
    },

    {
      title: 'GraphQL',
      description:
        'GraphQL is a query language for APIs that enables clients to request specific data, reducing over-fetching and improving performance.',
      icon: '/graphql.png',
    },
  ];
  return (
    <div id="skills">
      {' '}
      <h1 className="heading">
        I constantly try to improve{' '}
        <span className="text-purple">My tech stack</span>
      </h1>{' '}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: string;
  index: number;
}) => {
  return (
    <div
      className={cn(
        'flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800',
        (index === 0 || index === 4) && 'lg:border-l dark:border-neutral-800',
        index < 4 && 'lg:border-b dark:border-neutral-800'
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        <img src={icon} alt="icon5" className="p-2" />
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
