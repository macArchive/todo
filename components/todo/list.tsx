import { List } from '@chakra-ui/layout'
import Item, { ItemProps } from './item'

type Items = {
  items: ItemProps[]
}

export default function TodoList({ items }: Items) {
  return (
    <List spacing={3}>
      {items.map((v, i) => (
        <Item key={i} id={v.id} text={v.text} complete={v.complete} />
      ))}
    </List>
  )
}
