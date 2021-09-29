import { Header } from '../components/Header';
import {
  Container,
  Description,
  Button,
  Content,
  Title,
  SubTitle,
  Image,
  ImageCar,
  CarBox,
  DescriptionType,
  DescriptionModel,
  ImageBrand,
  BoxModel,
  ButtonOutline,
  Carousel,
  ImageContainer,
  ButtonRight,
  ButtonLeft,
} from './styledCars';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import axios from 'axios';

export default function Index(): JSX.Element {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [isIndex, setIndex] = useState(0);
  const [isData, setIsData] = useState<any[]>([data[isIndex]]);
  const [isCars, setCars] = useState<any[]>([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    axios
      .get('http://localhost:3000/api/cars/cars')
      .then(function (response) {
        // handle success

        setData(response.data.cars);

        const filtrado = response.data.cars.filter(function (obj) {
          return obj?.model == router.query.cars;
        });
        const cars = filtrado.slice(0, 3);

        if (cars.length >= 1) {
          setIndex(1);
        }
        if (cars.length == 1) {
          setIndex(0);
        }
        setIsData(cars);
        setData(cars);
        setCars(cars);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }

  const handleLeftClick = () => {
    const array = isData;
    const firstElement = array.pop();
    setIsData([firstElement, ...array]);
  };

  const handleRightClick = () => {
    const array = isData;
    const firstElement = array.shift();
    setIsData([...isData, firstElement]);
  };

  if (isCars.length >= 1) {
    return (
      <>
        <Header cars setCars />

        <Container className="cards">
          <Content>
            <CarBox>
              <ButtonOutline>
                <Link href="/">
                  <a>
                    <Image src={`./icons/arrow-black.svg`} />
                    <span>Back to catalog</span>
                  </a>
                </Link>
              </ButtonOutline>
              <ImageCar
                src={`./images/cars/side/${isData[isIndex].slug}.png`}
              />
              <Description>
                <DescriptionType>
                  <ImageBrand
                    src={`./images/brands/${isData[
                      isIndex
                    ].brand.toLowerCase()}${
                      isData[isIndex].brand == 'Ferrari' ? '.png' : '.svg'
                    }`}
                  />
                  <BoxModel>
                    <Title>
                      {isData[isIndex].brand} {isData[isIndex].model}
                    </Title>
                    <SubTitle>${isData[isIndex].price_per_day}/day</SubTitle>
                  </BoxModel>
                </DescriptionType>
                <DescriptionModel>
                  <Title>0{isIndex}</Title>
                  <SubTitle>{isData[isIndex].color}</SubTitle>
                </DescriptionModel>
              </Description>
            </CarBox>
            <Button>
              <span> Book now</span>
              <Image src={`./icons/arrow-right.svg`} />
            </Button>
            <Carousel className="carousel">
              <ButtonLeft
                onClick={handleLeftClick}
                disabled={isCars.length <= 1}
              >
                <Image src={`./icons/arrow-left.svg`} />
              </ButtonLeft>
              {isData.map((item, index) => {
                return (
                  <div className="item" key={item.id}>
                    <ImageContainer
                      className="image"
                      styled={index == isIndex ? '#7733ff' : '#D8D7D7'}
                      style={{
                        width: index == isIndex ? 250 : 150,
                        marginBottom: index == isIndex ? 80 : 10,
                        height: index == isIndex ? 170 : 120,
                        alignItems: 'center',
                        display: 'flex',
                      }}
                    >
                      <ImageCar
                        style={{
                          width: index == isIndex ? 350 : 200,
                          marginLeft: index == isIndex ? -50 : 0,
                        }}
                        src={`./images/cars/side/${item.slug}.png`}
                      />
                    </ImageContainer>
                  </div>
                );
              })}
              <ButtonRight
                onClick={handleRightClick}
                disabled={isCars.length <= 1}
              >
                <Image src={`./icons/arrow-right.svg`} />
              </ButtonRight>
            </Carousel>
          </Content>
        </Container>
      </>
    );
  } else {
    return <Header cars setCars />;
  }
}
