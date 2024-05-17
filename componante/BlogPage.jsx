import React from 'react';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importer uniquement le fichier CSS Bootstrap
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const BlogCard = ({ title, content, link }) => (
  <Col md={6} className="mb-4">
    <Card>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{content}</Card.Text>
        <Link href={link}>
          <Button variant="primary">Lire plus</Button>
        </Link>
      </Card.Body>
    </Card>
  </Col>
);

const BlogPage = () => {
  const blogPosts = [
    { title: 'Titre de la Publication 1', content: 'Contenu de la publication 1', link: '/post/1' },
    { title: 'Titre de la Publication 2', content: 'Contenu de la publication 2', link: '/post/2' },
    // Ajoutez autant d'objets pour chaque carte de blog que nécessaire
  ];

  return (
    <Container>
      <Row>
        {blogPosts.map((post, index) => (
          <BlogCard key={index} title={post.title} content={post.content} link={post.link} />
        ))}
      </Row>
    </Container>
  );
};

export default BlogPage;
