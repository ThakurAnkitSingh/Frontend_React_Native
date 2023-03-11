import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Tab1 from './Tab1'
import Tab2 from './Tab2'
import Tab3 from './Tab3'
import Tab4 from './Tab4'


export default function TabMain() {

    const Tab = createBottomTabNavigator()
    return (
            <Tab.Navigator>
                <Tab.Screen name="Notification" component={Tab1} />
                <Tab.Screen name="Photos" component={Tab2} />
                <Tab.Screen name="Todo" component={Tab3} />
                <Tab.Screen name="Calculator" component={Tab4} />
            </Tab.Navigator>
    )
}



// import React from 'react'
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
// import Tab1 from './Tab1'
// import Tab2 from './Tab2'
// import Tab3 from './Tab3'
// import Tab4 from './Tab4'

// const Tab = createBottomTabNavigator()


// export default function TabMain() {

//     return (
//         <Tab.Navigator>
//             <Tab.Screen name="Tab1" component={Tab1} />
//             <Tab.Screen name="Tab2" component={Tab2} />
//             <Tab.Screen name="Tab3" component={Tab3} />
//             <Tab.Screen name="Tab4" component={Tab4} />
//         </Tab.Navigator>
//     )
// }