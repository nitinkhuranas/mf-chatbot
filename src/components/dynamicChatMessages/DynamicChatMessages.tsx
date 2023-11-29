import { createElement, memo } from 'react';
import styles from './DynamicChatMessages.module.css'
import FundsList from '@/pages/fundsList';
import FundCard from '../fundCard';

const DynamicChatMessages = ({ messages }) => {
  const componentMapping = (componentName: string, data) => {
    switch (componentName) {
      case "fundsList": return {
        componentRef: FundsList,
        listData: data
      };
      case "fundCard": return {
        componentRef: FundCard,
        fundData: data
      };
      default: return null;
    }
  }

  const getRenderedData = (message) => {
    const { type, component, data } = message;
    if (type === 'string') {
      return data;
    }
    if (type === 'component') {
      const { componentRef, ...props } = componentMapping(component, data);
      const DynamicComponent = createElement(componentRef, { ...props });
      return DynamicComponent
    }
  }

  return (
    <div>
      {messages.map((message, index: number) => {
        return (
          <div key={index}>
            {getRenderedData(message)}
          </div>
        )
      })}
    </div>
  )
}

export default memo(DynamicChatMessages);