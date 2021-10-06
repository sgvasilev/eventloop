import React from 'react'
import { Droppable, DragDropContext, Draggable } from 'react-beautiful-dnd'

import Card from '../cards/Card'
import { Container } from './user.components'

const User = ({ itemPosUser, setItemPosUser, rotate }) => {
  function dragEndHandler(result) {
    if (!result.destination) {
      return
    }
    const items = Array.from(itemPosUser)
    const [reorder] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, reorder)
    return setItemPosUser(items)
  }

  return (
    <div>
      <h2
        style={{ margin: '13px auto', color: '#05386b', textAlign: 'center' }}
      >
        Drag'n'drop
      </h2>
      <Container>
        <DragDropContext onDragEnd={dragEndHandler}>
          <Droppable droppableId='items-1'>
            {(provided) => (
              <ul
                style={{
                  minWidth: '250px',
                  listStyleType: 'none',
                  border: '2px solid #3f3f3f',
                  borderRadius: '10px',
                  padding: '7px 7px',
                  minHeight: '500px',
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {itemPosUser.map((el, index) => {
                  return (
                    <Draggable
                      isDragDisabled={rotate}
                      key={Number(el.id)}
                      draggableId={el.id}
                      index={index}
                    >
                      {(provided) => (
                        <li
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                        >
                          <Card dataitem={el} />
                        </li>
                      )}
                    </Draggable>
                  )
                })}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </Container>
    </div>
  )
}

export default User
