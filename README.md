### Name: Divya Gupta
Assignment: SteelEye

## List Component
It is a reusable reeact functional component which can be used to create a unordered list.
We need to pass an array of list items as props. The component further uses another reusable functional component for each individual list item.
This component is a memoized component and hence it will only be re-rendered when the array of list items is passed as props gets changed.
The each individual list item inside the array of items should be an object containing a key as text having a string value.
The above component creates the following HTML elements:
1. ul - unordered list
2. li - list item(created dynamically for each individual item)

## Problems
1. A check was missing for items=null
2. const [setSelectedIndex, selectedIndex] = useState();
    While using the useState hook the callback method comes after the state variable.
    The correct way would be:
    const [selectedIndex, setSelectedIndex] = useState();
3. In WrappedSingleListItem => in li => onClick a function call is passed instead we should pass a constant variable.
4. PropType for isSelected is boolean and the value passed is a number.
5. The PropType for items is declared incorrectly.

## Optimizations
The two major optimizations which I think could be added:
1. Instead of using index of list item for tracking selected list item we should use a custom key.
2. For handleClick function due to referencial equality it will cause unnecessary re-renders. To prevent the same the function can be memoized using useCallback hook.