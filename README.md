# 使い方メモ

## 引用元リファレンス

[referense](https://salsita.github.io/node-pg-migrate/)

## 基本的な使い方メモ

### 修正DDLを追加する

名前の先頭にタイムスタンプが付加されたファイル名が作成されます。
この順序で実行されるため、お気をつけを

```zsh
pnpm run migrate create <ddl_name>
```

### 修正DDLを適応する

未適応のDDLを全て適応する

```zsh
pnpm run migrate up
```

### 適応数を指定して修正DDLを適応する

未適応のDDLをN個だけ適応する

```zsh
pnpm run migrate up {N}
```

### 修正DDLを戻す

現在の状態から1つ修正DDLを適応する

```zsh
pnpm run migrate down
```

### 適応数を指定して修正DDLを戻す

現在の状態からN個の修正DDLを適応する

```zsh
pnpm run migrate down
```

### migrationをやり直す

最後の適応をやり直す（down & up を実行）

```zsh
pnpm run migrate redo
```

### 適応数を指定してmigrationをやり直す

最後のN回の適応をやり直す（down & up をN回実行）

```zsh
pnpm run migrate redo {N}
```
