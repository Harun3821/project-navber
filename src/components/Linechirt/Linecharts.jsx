

import { LineChart, Line, XAxis, YAxis,  } from 'recharts';

const Linecharts = () => {

    
        const mathmarksData = [

        
            {"name_bengali": "Student 1", "name_english": "Student 1", "math_mark": 78, "physics_mark": 72, "chemistry_mark": 85},
            {"name_bengali": "Student 2", "name_english": "Student 2", "math_mark": 82, "physics_mark": 79, "chemistry_mark": 88},
            {"name_bengali": "Student 3", "name_english": "Student 3", "math_mark": 65, "physics_mark": 68, "chemistry_mark": 75},
            {"name_bengali": "Student 4", "name_english": "Student 4", "math_mark": 90, "physics_mark": 85, "chemistry_mark": 92},
            {"name_bengali": "Student 5", "name_english": "Student 5", "math_mark": 73, "physics_mark": 75, "chemistry_mark": 80},
            {"name_bengali": "Student 6", "name_english": "Student 6", "math_mark": 85, "physics_mark": 80, "chemistry_mark": 87},
            {"name_bengali": "Student 7", "name_english": "Student 7", "math_mark": 79, "physics_mark": 73, "chemistry_mark": 82},
            {"name_bengali": "Student 8", "name_english": "Student 8", "math_mark": 88, "physics_mark": 82, "chemistry_mark": 90},
            {"name_bengali": "Student 9", "name_english": "Student 9", "math_mark": 72, "physics_mark": 70, "chemistry_mark": 78},
            {"name_bengali": "Student 10", "name_english": "Student 10", "math_mark": 81, "physics_mark": 76, "chemistry_mark": 84}
        ];
      
      


    return (
        <div>
            <LineChart width={800} height={400} data={mathmarksData}>
                <XAxis dataKey="name"/>
                <YAxis></YAxis>
             <Line dataKey="math_mark" stroke='red'></Line>
             <Line dataKey="physics_mark"></Line>
            </LineChart>
        </div>
    );
};

export default Linecharts;