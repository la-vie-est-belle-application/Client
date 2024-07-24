import { Card, Flex, Grid, GridItem, Image } from "@chakra-ui/react";
import Typography from "@components/Typography/Typography";
import { MENUS } from "@constants/menu";
import { Link } from "react-router-dom";

const Menus = () => {
  return (
    <Grid
      templateRows="repeat(3, 1fr)"
      templateColumns="repeat(3, 1fr)"
      gap={"1.6rem"}
    >
      {MENUS.map((data, index) => {
        return (
          <GridItem key={data.title} rowSpan={index === 0 ? 2 : 1}>
            <Link to={data.url}>
              <Card height={"100%"} borderRadius={"1.5rem"} py={"1.2rem"}>
                <Flex
                  height={"100%"}
                  direction={"column"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Image src={data.imageUrl} boxSize={"4rem"} />
                  {data.subTitle && (
                    <Typography type="caption1">{data.subTitle}</Typography>
                  )}
                  <Typography type="subtitle6">{data.title}</Typography>
                </Flex>
              </Card>
            </Link>
          </GridItem>
        );
      })}
    </Grid>
  );
};

export default Menus;
