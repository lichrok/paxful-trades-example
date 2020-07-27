import { Trade } from '../store/types/tradesTypes';

export const Trades: Trade[] = [
  {
    id: 1,
    buyerName: 'Chanaaar',
    paymentMethod: 'Amazon Gift Card',
    amount: 77,
    isPaid: true,
    chat: {
      messages: [
        {
          id: '512665v1265',
          income: false,
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          time: '15 : 28',
        },
        {
          id: '5126adsd5v1265',
          income: true,
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          time: '15 : 28',
        }

      ],
      gotUnreads: {
        buyer: true,
        seller: false,
      },
    },
  },
  {
    id: 2,
    buyerName: 'Chanaaar',
    paymentMethod: 'iTunes Gift Card',
    amount: 30,
    isPaid: false,
    chat: {
      messages: [],
      gotUnreads: {
        buyer: true,
        seller: true,
      },
    },
  },
  {
    id: 3,
    buyerName: 'Chanaaar',
    paymentMethod: 'iTues Gift Card',
    amount: 45,
    isPaid: true,
    chat: {
      messages: [],
      gotUnreads: {
        buyer: false,
        seller: false,
      },
    },
  },
  {
    id: 4,
    buyerName: 'Chanaaar',
    paymentMethod: 'PayPal',
    amount: 12,
    isPaid: false,
    chat: {
      messages: [],
      gotUnreads: {
        buyer: true,
        seller: false,
      },
    },
  },
];
