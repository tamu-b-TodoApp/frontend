# get_design_context

## リクエスト

- **ツール**: `mcp__figma__get_design_context`
- **日時**: 2026-05-18 22:37:56
- **目的**: Button コンポーネント（node-id: 1:6）のデザイン情報を取得

### パラメータ

```json
{
  "fileKey": "XEenNYQY1piPcXve1LhxLy",
  "nodeId": "1:6",
  "clientFrameworks": "react,next.js",
  "clientLanguages": "typescript"
}
```

## レスポンス

### output 1（生成コード）

```tsx
const imgVector =
  'https://www.figma.com/api/mcp/asset/a26c1ff1-f8be-469f-ab23-1c0d7d3d4be0';

function FavoriteBorderOutlined({ className }: { className?: string }) {
  return (
    <div
      className={className || 'overflow-clip relative size-[24px]'}
      data-node-id="3:18"
      data-name="FavoriteBorderOutlined"
    >
      <div
        className="absolute inset-[12.5%_8.33%_11.04%_8.33%]"
        data-node-id="3:15"
        data-name="Vector"
      >
        <img
          alt=""
          className="absolute block inset-0 max-w-none size-full"
          src={imgVector}
        />
      </div>
    </div>
  );
}

type ButtonProps = {
  className?: string;
  icon?: React.ReactNode | null;
  label?: string;
};

export default function Button({
  className,
  icon = null,
  label = 'ボタン',
}: ButtonProps) {
  return (
    <div
      className={
        className ||
        'bg-white content-stretch flex gap-[10px] h-[40px] items-center justify-center overflow-clip px-[14px] py-[6px] relative rounded-[var(--infinity,33554428px)] w-[87px]'
      }
      data-node-id="1:6"
      data-name="Button"
    >
      {icon || (
        <FavoriteBorderOutlined className="overflow-clip relative shrink-0 size-[24px]" />
      )}
      <p
        className="[word-break:break-word] font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap"
        data-node-id="1:7"
      >
        {label}
      </p>
    </div>
  );
}
```

### output 2（注意メッセージ）

```
SUPER CRITICAL: The generated React+Tailwind code MUST be converted to match the target project's technology stack and styling system.
1. Analyze the target codebase to identify: technology stack, styling approach, component patterns, and design tokens
2. Convert React syntax to the target framework/library
3. Transform all Tailwind classes to the target styling system while preserving exact visual design
4. Follow the project's existing patterns and conventions
DO NOT install any Tailwind as a dependency unless the user instructs you to do so.
```

### output 3（data-node-id の説明）

```
Node ids have been added to the code as data attributes, e.g. `data-node-id="1:2"`.
```

### output 4（画像アセットの説明）

```
Images and SVGs will be stored as constants, e.g. const image = 'https://www.figma.com/api/mcp/asset/550e8400-e29b-41d4-a716-446655440000'. These constants will be used in the code as the source for the image, ex: <img src={image} />. Image assets are stored on a remote server for 7 days and can be fetched using the provided URLs until they expire.
```

### output_image（スクリーンショット）

ハートアイコン＋「ボタン」テキストの白い丸ボタン（画像）

## 仕様

### デザイン仕様（Tailwindクラスから読み取り）

| プロパティ         | 値                     |
| ------------------ | ---------------------- |
| 背景色             | white                  |
| 高さ               | 40px                   |
| 幅                 | 87px                   |
| padding            | 6px 14px               |
| gap                | 10px                   |
| border-radius      | pill（9999px相当）     |
| font-size          | 12px                   |
| font-weight        | regular（400）         |
| 文字色             | black                  |
| デフォルトアイコン | FavoriteBorderOutlined |
| デフォルトラベル   | ボタン                 |

## 対応する実装ファイル

`components/atom/Button/index.tsx`
