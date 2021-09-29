import {
  Container,
  Card,
  TextModel,
  TextPrice,
  TextDescription,
  PriceCard,
  TextSimbol,
  TextDay,
  ModelCard,
  SpheraCard,
  Sphera,
} from './styled';
import { useEffect, useState } from 'react';
import { Header } from '../components/Header';
import Link from 'next/link';
import axios from 'axios';

export default function Home(): JSX.Element {
  const [isData, setData] = useState<any[]>([]);
  const [isCars, setCars] = useState<any[]>([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    axios
      .get('http://localhost:3000/api/cars/cars')
      .then(function (response) {
        // handle success
        console.log(response.data.cars);
        setData(response.data.cars);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }

  const filter = (arg: string) => {
    const filtrado = isData.filter(function (obj) {
      return obj.model == arg;
    });
    const cars = filtrado.slice(0, 3);
  };
  return (
    <>
      <Header />
      <Container className="cards">
        {isData.map((field, index) => {
          return (
            <Card
              onClick={() => filter(field.model)}
              styleHouver={field.color}
              key={field.type}
            >
              <Link href={`/${field.model}`}>
                <a>
                  <ModelCard>
                    <TextModel>{field.brand}</TextModel>
                    <SpheraCard>
                      <Sphera />
                      <Sphera />
                      <Sphera />
                    </SpheraCard>
                  </ModelCard>
                  <TextDescription>{field.model.toUpperCase()}</TextDescription>
                  <img
                    width="250"
                    src={`./images/cars/side/${field.slug}.png`}
                  />
                  <PriceCard>
                    <TextSimbol>$</TextSimbol>{' '}
                    <TextPrice>{field.price_per_day}</TextPrice>
                    <TextDay>/day </TextDay>
                  </PriceCard>
                </a>
              </Link>
            </Card>
          );
        })}
      </Container>
    </>
  );
}
