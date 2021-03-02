import { Input } from "../../../Form";
import styled from "styled-components";

export const CommentsInput = styled(Input)`
  display: block;
  margin-top: 10px;
  height: 32px;
  border-radius: 6px;
  border: 1px solid #b2b2b2;
  display: block;
  color: #525252;
  padding: 4px 9px;
`;

export const OptionGroup = styled.div`
  display: grid;
  grid-auto-flow: row;
  gap: 14px;
  justify-content: start;
`;

export const Page = styled.div`
  width: 100%;
  min-height: 456px;
  flex-shrink: 0;
`;

export const FieldGroupTitle = styled.span`
  font-size: 26px;
  color: #383838;
`;

export const FieldGroupDescription = styled.span`
  font-size: 26px;
  color: #383838;
  font-size: 15px;
`;

export const Value = styled.span`
  font-size: 14px;
  color: #5d5d5d;
  font-weight: 300;
  font-style: italic;
`;

export const FillingOption = styled.div`
  display: flex;
  align-items: center;
`;

export const FieldGroup = styled.div`
  margin: 36px 0;
`;

export const FillingInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 16px;
`;

export const FieldGroupHeader = styled.div`
  display: grid;
  margin-bottom: 16px;
`;

export const BorderOption = styled.div`
  display: flex;
`;

export const ExtraOption = styled.div`
  display: flex;
`;

export const SizeOption = styled.div`
  display: flex;
`;

export const FillingDescription = styled.div`
  font-size: 12px;
  font-style: italic;
  max-width: 380px;
  font-weight: 400;
  color: #595959;
  margin-top: 9px;
`;
