import { Button } from 'react-native';

export default {
  title: 'React Native Button',
  component: Button,
  args: {
    title: 'React Native Button',
  },
};

export const Basic = (args: any) => <Button {...args} />;
