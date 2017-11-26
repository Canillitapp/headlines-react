import styled from 'styled-components/native';

export const CardContainer = styled.TouchableOpacity`
  border-radius: 10px;
  border: 1px solid #aaa;
  margin: 10px 10px 0 10px;
  overflow: hidden;
`;

export const CardImage = styled.ImageBackground`
  width: 100%;
  height: 150px;
  justify-content: space-between;
`;

export const CardImageText = styled.Text`
  align-self: flex-start;
  font-size: ${props => (props.topic ? '20px' : '14px')};
  color: #fff;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 3px 6px;
`;

export const CardNewsCount = styled.Text`
  align-self: flex-end;
  color: #fff;
  background-color: #f6002f;
  padding: 3px 6px;
`;

export const CardDescription = styled.View`
  padding: 5px;
`;

export const CardDescSource = styled.Text`
  font-weight: bold;
`;

export const CardDescDate = styled.Text`
  color: #aaa;
`;

export const NewsContainer = styled.TouchableOpacity`
  border: 0.5px solid #aaa;
  flex-direction: row;
  width: 100%;
`;

export const NewsImage = styled.Image`
  width: 100px;
  height: 100px;
  margin: 5px;
  border-radius: 10px;
  flex: 0 0 100px;
`;

export const NewsDescription = styled.View`
  padding: 5px;
  flex: 1 0 100px;
`;

export const LoadingContainer = styled.View`
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
