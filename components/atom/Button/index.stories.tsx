import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Button } from '.';

const meta = {
  title: 'Atom/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    label: 'ボタン',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithStarIcon: Story = {
  args: {
    icon: <StarBorderOutlinedIcon sx={{ fontSize: 24 }} />,
    label: 'お気に入り',
  },
};

export const LabelOnly: Story = {
  args: {
    icon: null,
    label: '送信',
  },
};
