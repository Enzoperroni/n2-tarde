import styled from "styled-components";

const PostContainer = styled.div`
  width: 100%;
  max-width: 350px;
  background: #fff;
  border: 1px solid #e1e1e1;  
  margin: auto;
  border-radius:10px;
  margin-bottom:20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const PostHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 10px;
  }
  span {
    font-weight: bold;
  }
`;



const PostImage = styled.img`
  width: 100%;
  object-fit: cover;
      
`;

const PostCaption = styled.div`
  position: relative;
  
  padding: 10px;
  span {
    font-size: 0.9rem;
  }
`;
const PostEndereco = styled.div`
  margin-left:2px;
  font-size:10px;

`;

export {PostCaption, PostContainer, PostEndereco, PostHeader, PostImage}