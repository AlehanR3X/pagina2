const tidesData = [
    // Datos de BAHIA DE CARAQUEZ
    { "puerto": "BAHIA DE CARAQUEZ", "fecha": "2025-02-01", "hora": "00:14", "marea": "0.05" },
    { "puerto": "BAHIA DE CARAQUEZ", "fecha": "2025-02-01", "hora": "06:28", "marea": "2.91" },
    { "puerto": "BAHIA DE CARAQUEZ", "fecha": "2025-02-01", "hora": "12:38", "marea": "0.42" },
    { "puerto": "BAHIA DE CARAQUEZ", "fecha": "2025-02-01", "hora": "18:39", "marea": "2.79" },
    { "puerto": "BAHIA DE CARAQUEZ", "fecha": "2025-02-02", "hora": "01:01", "marea": "0.22" },
    { "puerto": "BAHIA DE CARAQUEZ", "fecha": "2025-02-02", "hora": "07:19", "marea": "2.75" },
    { "puerto": "BAHIA DE CARAQUEZ", "fecha": "2025-02-02", "hora": "13:29", "marea": "0.58" },
    { "puerto": "BAHIA DE CARAQUEZ", "fecha": "2025-02-02", "hora": "19:31", "marea": "2.58" },
    { "puerto": "BAHIA DE CARAQUEZ", "fecha": "2025-02-03", "hora": "01:53", "marea": "0.42" },
    { "puerto": "BAHIA DE CARAQUEZ", "fecha": "2025-02-03", "hora": "08:15", "marea": "2.57" },
    { "puerto": "BAHIA DE CARAQUEZ", "fecha": "2025-02-03", "hora": "14:26", "marea": "0.75" },
    { "puerto": "BAHIA DE CARAQUEZ", "fecha": "2025-02-03", "hora": "20:29", "marea": "2.37" },
    { "puerto": "BAHIA DE CARAQUEZ", "fecha": "2025-02-04", "hora": "02:51", "marea": "0.61" },
    { "puerto": "BAHIA DE CARAQUEZ", "fecha": "2025-02-04", "hora": "09:19", "marea": "2.35" },
    { "puerto": "BAHIA DE CARAQUEZ", "fecha": "2025-02-04", "hora": "15:34", "marea": "0.88" },
    { "puerto": "BAHIA DE CARAQUEZ", "fecha": "2025-02-04", "hora": "21:36", "marea": "2.22" },
    { "puerto": "BAHIA DE CARAQUEZ", "fecha": "2025-02-05", "hora": "03:58", "marea": "0.76" },
    { "puerto": "BAHIA DE CARAQUEZ", "fecha": "2025-02-05", "hora": "10:28", "marea": "2.35" },
    { "puerto": "BAHIA DE CARAQUEZ", "fecha": "2025-02-05", "hora": "16:49", "marea": "0.93" },
    { "puerto": "BAHIA DE CARAQUEZ", "fecha": "2025-02-05", "hora": "22:51", "marea": "2.15" },
    { "puerto": "BAHIA DE CARAQUEZ", "fecha": "2025-02-06", "hora": "05:10", "marea": "0.83" },
    { "puerto": "BAHIA DE CARAQUEZ", "fecha": "2025-02-06", "hora": "11:36", "marea": "2.35" },
    { "puerto": "BAHIA DE CARAQUEZ", "fecha": "2025-02-06", "hora": "18:01", "marea": "0.90" },
    { "puerto": "BAHIA DE CARAQUEZ", "fecha": "2025-02-07", "hora": "00:04", "marea": "2.17" },
    { "puerto": "BAHIA DE CARAQUEZ", "fecha": "2025-02-07", "hora": "06:16", "marea": "0.83" },
    { "puerto": "BAHIA DE CARAQUEZ", "fecha": "2025-02-07", "hora": "12:37", "marea": "2.40" },
    { "puerto": "BAHIA DE CARAQUEZ", "fecha": "2025-02-07", "hora": "19:02", "marea": "0.80" },
    { "puerto": "BAHIA DE CARAQUEZ", "fecha": "2025-02-08", "hora": "01:05", "marea": "2.25" },
    { "puerto": "BAHIA DE CARAQUEZ", "fecha": "2025-02-08", "hora": "07:13", "marea": "0.81" },
    { "puerto": "BAHIA DE CARAQUEZ", "fecha": "2025-02-08", "hora": "13:27", "marea": "2.48" },
    { "puerto": "BAHIA DE CARAQUEZ", "fecha": "2025-02-08", "hora": "19:52", "marea": "0.69" },
    { "puerto": "BAHIA DE CARAQUEZ", "fecha": "2025-02-09", "hora": "01:56", "marea": "2.35" },
    { "puerto": "BAHIA DE CARAQUEZ", "fecha": "2025-02-09", "hora": "08:01", "marea": "0.77" },
    { "puerto": "BAHIA DE CARAQUEZ", "fecha": "2025-02-09", "hora": "14:11", "marea": "2.55" },
    { "puerto": "BAHIA DE CARAQUEZ", "fecha": "2025-02-09", "hora": "20:34", "marea": "0.59" },
    { "puerto": "BAHIA DE CARAQUEZ", "fecha": "2025-02-10", "hora": "02:40", "marea": "2.45" },
    { "puerto": "BAHIA DE CARAQUEZ", "fecha": "2025-02-10", "hora": "08:43", "marea": "0.73" },
    { "puerto": "BAHIA DE CARAQUEZ", "fecha": "2025-02-10", "hora": "14:49", "marea": "2.61" },
    { "puerto": "BAHIA DE CARAQUEZ", "fecha": "2025-02-10", "hora": "21:12", "marea": "0.50" },
    
    // Datos de GUAYAQUIL (RIO GUAYAS)
    { "puerto": "GUAYAQUIL (RIO GUAYAS)", "fecha": "2025-02-01", "hora": "04:25", "marea": "0.38" },
    { "puerto": "GUAYAQUIL (RIO GUAYAS)", "fecha": "2025-02-01", "hora": "09:53", "marea": "4.30" },
    { "puerto": "GUAYAQUIL (RIO GUAYAS)", "fecha": "2025-02-01", "hora": "16:43", "marea": "0.68" },
    { "puerto": "GUAYAQUIL (RIO GUAYAS)", "fecha": "2025-02-01", "hora": "21:59", "marea": "4.18" },
    { "puerto": "GUAYAQUIL (RIO GUAYAS)", "fecha": "2025-02-02", "hora": "05:07", "marea": "0.50" },
    { "puerto": "GUAYAQUIL (RIO GUAYAS)", "fecha": "2025-02-02", "hora": "10:40", "marea": "4.16" },
    { "puerto": "GUAYAQUIL (RIO GUAYAS)", "fecha": "2025-02-02", "hora": "17:27", "marea": "0.87" },
    { "puerto": "GUAYAQUIL (RIO GUAYAS)", "fecha": "2025-02-02", "hora": "22:48", "marea": "3.97" },
    { "puerto": "GUAYAQUIL (RIO GUAYAS)", "fecha": "2025-02-03", "hora": "05:52", "marea": "0.61" },
    { "puerto": "GUAYAQUIL (RIO GUAYAS)", "fecha": "2025-02-03", "hora": "11:31", "marea": "4.01" },
    { "puerto": "GUAYAQUIL (RIO GUAYAS)", "fecha": "2025-02-03", "hora": "18:16", "marea": "0.91" },
    { "puerto": "GUAYAQUIL (RIO GUAYAS)", "fecha": "2025-02-03", "hora": "23:43", "marea": "3.77" },
    { "puerto": "GUAYAQUIL (RIO GUAYAS)", "fecha": "2025-02-04", "hora": "06:40", "marea": "0.76" },
    { "puerto": "GUAYAQUIL (RIO GUAYAS)", "fecha": "2025-02-04", "hora": "12:48", "marea": "3.88" },
    { "puerto": "GUAYAQUIL (RIO GUAYAS)", "fecha": "2025-02-04", "hora": "19:14", "marea": "1.00" },
    { "puerto": "GUAYAQUIL (RIO GUAYAS)", "fecha": "2025-02-05", "hora": "00:46", "marea": "3.60" },
    { "puerto": "GUAYAQUIL (RIO GUAYAS)", "fecha": "2025-02-05", "hora": "07:38", "marea": "0.81" },
    { "puerto": "GUAYAQUIL (RIO GUAYAS)", "fecha": "2025-02-05", "hora": "13:31", "marea": "3.78" },
    { "puerto": "GUAYAQUIL (RIO GUAYAS)", "fecha": "2025-02-05", "hora": "20:26", "marea": "1.02" },
    { "puerto": "GUAYAQUIL (RIO GUAYAS)", "fecha": "2025-02-06", "hora": "01:57", "marea": "3.52" },
    { "puerto": "GUAYAQUIL (RIO GUAYAS)", "fecha": "2025-02-06", "hora": "08:47", "marea": "0.85" },
    { "puerto": "GUAYAQUIL (RIO GUAYAS)", "fecha": "2025-02-06", "hora": "14:41", "marea": "3.76" },
    { "puerto": "GUAYAQUIL (RIO GUAYAS)", "fecha": "2025-02-06", "hora": "21:42", "marea": "0.92" },
    { "puerto": "GUAYAQUIL (RIO GUAYAS)", "fecha": "2025-02-07", "hora": "03:11", "marea": "3.55" },
    { "puerto": "GUAYAQUIL (RIO GUAYAS)", "fecha": "2025-02-07", "hora": "09:59", "marea": "0.82" },
    { "puerto": "GUAYAQUIL (RIO GUAYAS)", "fecha": "2025-02-07", "hora": "15:51", "marea": "3.82" },
    { "puerto": "GUAYAQUIL (RIO GUAYAS)", "fecha": "2025-02-07", "hora": "22:48", "marea": "0.73" },
    { "puerto": "GUAYAQUIL (RIO GUAYAS)", "fecha": "2025-02-08", "hora": "04:21", "marea": "3.67" },
    { "puerto": "GUAYAQUIL (RIO GUAYAS)", "fecha": "2025-02-08", "hora": "11:02", "marea": "0.73" },
    { "puerto": "GUAYAQUIL (RIO GUAYAS)", "fecha": "2025-02-08", "hora": "16:53", "marea": "3.96" },
    { "puerto": "GUAYAQUIL (RIO GUAYAS)", "fecha": "2025-02-08", "hora": "23:43", "marea": "0.53" },
    { "puerto": "GUAYAQUIL (RIO GUAYAS)", "fecha": "2025-02-09", "hora": "05:20", "marea": "3.82" },
    { "puerto": "GUAYAQUIL (RIO GUAYAS)", "fecha": "2025-02-09", "hora": "11:56", "marea": "0.64" },
    { "puerto": "GUAYAQUIL (RIO GUAYAS)", "fecha": "2025-02-09", "hora": "17:44", "marea": "4.02" },
    { "puerto": "GUAYAQUIL (RIO GUAYAS)", "fecha": "2025-02-10", "hora": "00:30", "marea": "0.39" },
    { "puerto": "GUAYAQUIL (RIO GUAYAS)", "fecha": "2025-02-10", "hora": "06:09", "marea": "3.96" },
    { "puerto": "GUAYAQUIL (RIO GUAYAS)", "fecha": "2025-02-10", "hora": "12:42", "marea": "0.58" },
    { "puerto": "GUAYAQUIL (RIO GUAYAS)", "fecha": "2025-02-10", "hora": "18:25", "marea": "4.09" },
    // Datos de LA LIBERTAD
    { "puerto": "LA LIBERTAD", "fecha": "2025-02-01", "hora": "06:21", "marea": "2.42" },
    { "puerto": "LA LIBERTAD", "fecha": "2025-02-01", "hora": "12:27", "marea": "0.44" },
    { "puerto": "LA LIBERTAD", "fecha": "2025-02-01", "hora": "18:26", "marea": "2.29" },
    { "puerto": "LA LIBERTAD", "fecha": "2025-02-02", "hora": "00:48", "marea": "0.21" },
    { "puerto": "LA LIBERTAD", "fecha": "2025-02-02", "hora": "07:14", "marea": "2.28" },
    { "puerto": "LA LIBERTAD", "fecha": "2025-02-02", "hora": "13:22", "marea": "0.57" },
    { "puerto": "LA LIBERTAD", "fecha": "2025-02-02", "hora": "19:18", "marea": "2.10" },
    { "puerto": "LA LIBERTAD", "fecha": "2025-02-03", "hora": "01:43", "marea": "0.37" },
    { "puerto": "LA LIBERTAD", "fecha": "2025-02-03", "hora": "08:12", "marea": "2.12" },
    { "puerto": "LA LIBERTAD", "fecha": "2025-02-03", "hora": "14:25", "marea": "0.70" },
    { "puerto": "LA LIBERTAD", "fecha": "2025-02-03", "hora": "20:17", "marea": "1.92" },
    { "puerto": "LA LIBERTAD", "fecha": "2025-02-04", "hora": "02:45", "marea": "0.52" },
    { "puerto": "LA LIBERTAD", "fecha": "2025-02-04", "hora": "09:17", "marea": "1.99" },
    { "puerto": "LA LIBERTAD", "fecha": "2025-02-04", "hora": "15:36", "marea": "0.78" },
    { "puerto": "LA LIBERTAD", "fecha": "2025-02-04", "hora": "21:30", "marea": "1.78" },
    { "puerto": "LA LIBERTAD", "fecha": "2025-02-05", "hora": "03:56", "marea": "0.63" },
    { "puerto": "LA LIBERTAD", "fecha": "2025-02-05", "hora": "10:29", "marea": "1.93" },
    { "puerto": "LA LIBERTAD", "fecha": "2025-02-05", "hora": "16:50", "marea": "0.80" },
    { "puerto": "LA LIBERTAD", "fecha": "2025-02-05", "hora": "22:51", "marea": "1.73" },
    { "puerto": "LA LIBERTAD", "fecha": "2025-02-06", "hora": "05:09", "marea": "0.68" },
    { "puerto": "LA LIBERTAD", "fecha": "2025-02-06", "hora": "11:40", "marea": "1.93" },
    { "puerto": "LA LIBERTAD", "fecha": "2025-02-06", "hora": "18:00", "marea": "0.75" },
    { "puerto": "LA LIBERTAD", "fecha": "2025-02-07", "hora": "00:04", "marea": "1.75" },
    { "puerto": "LA LIBERTAD", "fecha": "2025-02-07", "hora": "06:12", "marea": "0.68" },
    { "puerto": "LA LIBERTAD", "fecha": "2025-02-07", "hora": "12:38", "marea": "1.98" },
    { "puerto": "LA LIBERTAD", "fecha": "2025-02-07", "hora": "19:00", "marea": "0.67" },
    { "puerto": "LA LIBERTAD", "fecha": "2025-02-08", "hora": "01:05", "marea": "1.82" },
    { "puerto": "LA LIBERTAD", "fecha": "2025-02-08", "hora": "07:05", "marea": "0.67" },
    { "puerto": "LA LIBERTAD", "fecha": "2025-02-08", "hora": "13:24", "marea": "2.04" },
    { "puerto": "LA LIBERTAD", "fecha": "2025-02-08", "hora": "19:48", "marea": "0.56" },
    { "puerto": "LA LIBERTAD", "fecha": "2025-02-09", "hora": "01:54", "marea": "1.90" },
    { "puerto": "LA LIBERTAD", "fecha": "2025-02-09", "hora": "07:52", "marea": "0.65" },
    { "puerto": "LA LIBERTAD", "fecha": "2025-02-09", "hora": "14:03", "marea": "2.09" },
    { "puerto": "LA LIBERTAD", "fecha": "2025-02-09", "hora": "20:26", "marea": "0.47" },
    { "puerto": "LA LIBERTAD", "fecha": "2025-02-10", "hora": "02:36", "marea": "1.99" },
    { "puerto": "LA LIBERTAD", "fecha": "2025-02-10", "hora": "08:33", "marea": "0.64" },
    { "puerto": "LA LIBERTAD", "fecha": "2025-02-10", "hora": "14:38", "marea": "2.13" },
    { "puerto": "LA LIBERTAD", "fecha": "2025-02-10", "hora": "21:00", "marea": "0.40" },
    // Datos de POSORJA
    { "puerto": "POSORJA", "fecha": "2025-02-01", "hora": "01:38", "marea": "0.04" },
    { "puerto": "POSORJA", "fecha": "2025-02-01", "hora": "07:55", "marea": "2.66" },
    { "puerto": "POSORJA", "fecha": "2025-02-01", "hora": "14:10", "marea": "0.42" },
    { "puerto": "POSORJA", "fecha": "2025-02-01", "hora": "20:04", "marea": "2.47" },
    { "puerto": "POSORJA", "fecha": "2025-02-02", "hora": "02:25", "marea": "0.14" },
    { "puerto": "POSORJA", "fecha": "2025-02-02", "hora": "08:47", "marea": "2.54" },
    { "puerto": "POSORJA", "fecha": "2025-02-02", "hora": "15:03", "marea": "0.52" },
    { "puerto": "POSORJA", "fecha": "2025-02-02", "hora": "20:57", "marea": "2.31" },
    { "puerto": "POSORJA", "fecha": "2025-02-03", "hora": "03:15", "marea": "0.28" },
    { "puerto": "POSORJA", "fecha": "2025-02-03", "hora": "09:43", "marea": "2.42" },
    { "puerto": "POSORJA", "fecha": "2025-02-03", "hora": "16:03", "marea": "0.62" },
    { "puerto": "POSORJA", "fecha": "2025-02-03", "hora": "21:56", "marea": "2.15" },
    { "puerto": "POSORJA", "fecha": "2025-02-04", "hora": "04:13", "marea": "0.43" },
    { "puerto": "POSORJA", "fecha": "2025-02-04", "hora": "10:45", "marea": "2.31" },
    { "puerto": "POSORJA", "fecha": "2025-02-04", "hora": "17:11", "marea": "0.68" },
    { "puerto": "POSORJA", "fecha": "2025-02-04", "hora": "23:05", "marea": "2.04" },
    { "puerto": "POSORJA", "fecha": "2025-02-05", "hora": "05:20", "marea": "0.55" },
    { "puerto": "POSORJA", "fecha": "2025-02-05", "hora": "11:53", "marea": "2.26" },
    { "puerto": "POSORJA", "fecha": "2025-02-05", "hora": "18:24", "marea": "0.69" },
    { "puerto": "POSORJA", "fecha": "2025-02-06", "hora": "00:20", "marea": "2.00" },
    { "puerto": "POSORJA", "fecha": "2025-02-06", "hora": "06:33", "marea": "0.62" },
    { "puerto": "POSORJA", "fecha": "2025-02-06", "hora": "13:00", "marea": "2.26" },
    { "puerto": "POSORJA", "fecha": "2025-02-06", "hora": "19:31", "marea": "0.63" },
    { "puerto": "POSORJA", "fecha": "2025-02-07", "hora": "01:32", "marea": "2.04" },
    { "puerto": "POSORJA", "fecha": "2025-02-07", "hora": "07:42", "marea": "0.64" },
    { "puerto": "POSORJA", "fecha": "2025-02-07", "hora": "14:01", "marea": "2.30" },
    { "puerto": "POSORJA", "fecha": "2025-02-07", "hora": "20:28", "marea": "0.54" },
    { "puerto": "POSORJA", "fecha": "2025-02-08", "hora": "02:34", "marea": "2.14" },
    { "puerto": "POSORJA", "fecha": "2025-02-08", "hora": "08:42", "marea": "0.62" },
    { "puerto": "POSORJA", "fecha": "2025-02-08", "hora": "14:52", "marea": "2.35" },
    { "puerto": "POSORJA", "fecha": "2025-02-08", "hora": "21:17", "marea": "0.46" },
    { "puerto": "POSORJA", "fecha": "2025-02-09", "hora": "03:25", "marea": "2.24" },
    { "puerto": "POSORJA", "fecha": "2025-02-09", "hora": "09:32", "marea": "0.60" },
    { "puerto": "POSORJA", "fecha": "2025-02-09", "hora": "15:36", "marea": "2.39" },
    { "puerto": "POSORJA", "fecha": "2025-02-09", "hora": "21:59", "marea": "0.38" },
    { "puerto": "POSORJA", "fecha": "2025-02-10", "hora": "04:08", "marea": "2.34" },
    { "puerto": "POSORJA", "fecha": "2025-02-10", "hora": "10:15", "marea": "0.58" },
    { "puerto": "POSORJA", "fecha": "2025-02-10", "hora": "16:15", "marea": "2.42" },
    { "puerto": "POSORJA", "fecha": "2025-02-10", "hora": "22:36", "marea": "0.32" },
    // Datos de PUERTO BOLIVAR
    { "puerto": "PUERTO BOLIVAR", "fecha": "2025-02-01", "hora": "00:42", "marea": "0.10" },
    { "puerto": "PUERTO BOLIVAR", "fecha": "2025-02-01", "hora": "07:24", "marea": "3.13" },
    { "puerto": "PUERTO BOLIVAR", "fecha": "2025-02-01", "hora": "13:12", "marea": "0.53" },
    { "puerto": "PUERTO BOLIVAR", "fecha": "2025-02-01", "hora": "19:29", "marea": "2.97" },
    { "puerto": "PUERTO BOLIVAR", "fecha": "2025-02-02", "hora": "01:31", "marea": "0.28" },
    { "puerto": "PUERTO BOLIVAR", "fecha": "2025-02-02", "hora": "08:15", "marea": "2.98" },
    { "puerto": "PUERTO BOLIVAR", "fecha": "2025-02-02", "hora": "14:06", "marea": "0.71" },
    { "puerto": "PUERTO BOLIVAR", "fecha": "2025-02-02", "hora": "20:19", "marea": "2.76" },
    { "puerto": "PUERTO BOLIVAR", "fecha": "2025-02-03", "hora": "02:24", "marea": "0.49" },
    { "puerto": "PUERTO BOLIVAR", "fecha": "2025-02-03", "hora": "09:11", "marea": "2.82" },
    { "puerto": "PUERTO BOLIVAR", "fecha": "2025-02-03", "hora": "15:06", "marea": "0.90" },
    { "puerto": "PUERTO BOLIVAR", "fecha": "2025-02-03", "hora": "21:16", "marea": "2.57" },
    { "puerto": "PUERTO BOLIVAR", "fecha": "2025-02-04", "hora": "03:23", "marea": "0.70" },
    { "puerto": "PUERTO BOLIVAR", "fecha": "2025-02-04", "hora": "10:14", "marea": "2.68" },
    { "puerto": "PUERTO BOLIVAR", "fecha": "2025-02-04", "hora": "16:14", "marea": "1.05" },
    { "puerto": "PUERTO BOLIVAR", "fecha": "2025-02-04", "hora": "22:23", "marea": "2.42" },
    { "puerto": "PUERTO BOLIVAR", "fecha": "2025-02-05", "hora": "04:29", "marea": "0.88" },
    { "puerto": "PUERTO BOLIVAR", "fecha": "2025-02-05", "hora": "11:24", "marea": "2.61" },
    { "puerto": "PUERTO BOLIVAR", "fecha": "2025-02-05", "hora": "17:29", "marea": "1.11" },
    { "puerto": "PUERTO BOLIVAR", "fecha": "2025-02-05", "hora": "23:40", "marea": "2.36" },
    { "puerto": "PUERTO BOLÍVAR", "fecha": "2025-02-06", "hora": "05:42", "marea": "0.99" },
    { "puerto": "PUERTO BOLÍVAR", "fecha": "2025-02-06", "hora": "12:33", "marea": "2.61" },
    { "puerto": "PUERTO BOLÍVAR", "fecha": "2025-02-06", "hora": "18:43", "marea": "1.07" },
    { "puerto": "PUERTO BOLÍVAR", "fecha": "2025-02-07", "hora": "00:56", "marea": "2.40" },
    { "puerto": "PUERTO BOLÍVAR", "fecha": "2025-02-07", "hora": "06:53", "marea": "1.01" },
    { "puerto": "PUERTO BOLÍVAR", "fecha": "2025-02-07", "hora": "13:33", "marea": "2.66" },
    { "puerto": "PUERTO BOLÍVAR", "fecha": "2025-02-07", "hora": "19:44", "marea": "0.96" },
    { "puerto": "PUERTO BOLÍVAR", "fecha": "2025-02-08", "hora": "02:01", "marea": "2.49" },
    { "puerto": "PUERTO BOLÍVAR", "fecha": "2025-02-08", "hora": "07:54", "marea": "0.98" },
    { "puerto": "PUERTO BOLÍVAR", "fecha": "2025-02-08", "hora": "14:24", "marea": "2.73" },
    { "puerto": "PUERTO BOLÍVAR", "fecha": "2025-02-08", "hora": "20:32", "marea": "0.83" },
    { "puerto": "PUERTO BOLÍVAR", "fecha": "2025-02-09", "hora": "02:53", "marea": "2.59" },
    { "puerto": "PUERTO BOLÍVAR", "fecha": "2025-02-09", "hora": "08:42", "marea": "0.92" },
    { "puerto": "PUERTO BOLÍVAR", "fecha": "2025-02-09", "hora": "15:07", "marea": "2.79" },
    { "puerto": "PUERTO BOLÍVAR", "fecha": "2025-02-09", "hora": "21:12", "marea": "0.70" },
    { "puerto": "PUERTO BOLÍVAR", "fecha": "2025-02-10", "hora": "03:36", "marea": "2.69" },
    { "puerto": "PUERTO BOLÍVAR", "fecha": "2025-02-10", "hora": "09:23", "marea": "0.85" },
    { "puerto": "PUERTO BOLÍVAR", "fecha": "2025-02-10", "hora": "15:44", "marea": "2.84" },
    { "puerto": "PUERTO BOLÍVAR", "fecha": "2025-02-10", "hora": "21:47", "marea": "0.59" },
    // Datos de Isla Puna
    { "puerto": "ISLA PUNA", "fecha": "2025-02-01", "hora": "01:48", "marea": "0.01" },
    { "puerto": "ISLA PUNA", "fecha": "2025-02-01", "hora": "08:06", "marea": "4.02" },
    { "puerto": "ISLA PUNA", "fecha": "2025-02-01", "hora": "14:15", "marea": "0.50" },
    { "puerto": "ISLA PUNA", "fecha": "2025-02-01", "hora": "20:15", "marea": "3.86" },
    { "puerto": "ISLA PUNA", "fecha": "2025-02-02", "hora": "02:34", "marea": "0.22" },
    { "puerto": "ISLA PUNA", "fecha": "2025-02-02", "hora": "08:57", "marea": "3.87" },
    { "puerto": "ISLA PUNA", "fecha": "2025-02-02", "hora": "15:06", "marea": "0.72" },
    { "puerto": "ISLA PUNA", "fecha": "2025-02-02", "hora": "21:06", "marea": "3.64" },
    { "puerto": "ISLA PUNA", "fecha": "2025-02-03", "hora": "03:24", "marea": "0.48" },
    { "puerto": "ISLA PUNA", "fecha": "2025-02-03", "hora": "09:53", "marea": "3.69" },
    { "puerto": "ISLA PUNA", "fecha": "2025-02-03", "hora": "16:05", "marea": "0.95" },
    { "puerto": "ISLA PUNA", "fecha": "2025-02-03", "hora": "22:04", "marea": "3.41" },
    { "puerto": "ISLA PUNA", "fecha": "2025-02-04", "hora": "04:22", "marea": "0.73" },
    { "puerto": "ISLA PUNA", "fecha": "2025-02-04", "hora": "10:56", "marea": "3.53" },
    { "puerto": "ISLA PUNA", "fecha": "2025-02-04", "hora": "17:13", "marea": "1.13" },
    { "puerto": "ISLA PUNA", "fecha": "2025-02-04", "hora": "23:12", "marea": "3.24" },
    { "puerto": "ISLA PUNA", "fecha": "2025-02-05", "hora": "05:29", "marea": "0.94" },
    { "puerto": "ISLA PUNA", "fecha": "2025-02-05", "hora": "12:03", "marea": "3.43" },
    { "puerto": "ISLA PUNA", "fecha": "2025-02-05", "hora": "18:25", "marea": "1.18" },
    
];

document.addEventListener("DOMContentLoaded", () => {
    loadTidesData(tidesData);
});

function loadTidesData(data) {
    const headerRow = document.getElementById("header-row");
    const subheaderRow = document.getElementById("subheader-row");
    const tbody = document.getElementById("tides-data");

    // Reinicia la tabla
    headerRow.innerHTML = "<th rowspan='2'>Fecha</th>";
    subheaderRow.innerHTML = "";
    tbody.innerHTML = "";

    // Extrae puertos y fechas únicas
    const puertos = [...new Set(data.map(item => item.puerto))];
    const fechas = [...new Set(data.map(item => item.fecha))];

    // Crea los encabezados para cada puerto y sus sub-encabezados
    puertos.forEach(puerto => {
        const th = document.createElement("th");
        th.classList.add("puerto-column");
        th.textContent = puerto;
        th.colSpan = 2;
        headerRow.appendChild(th);

        const thHora = document.createElement("th");
        thHora.textContent = "Hora";
        subheaderRow.appendChild(thHora);

        const thMarea = document.createElement("th");
        thMarea.textContent = "Marea";
        subheaderRow.appendChild(thMarea);
    });

    // Rellena la tabla con los datos correspondientes
    fechas.forEach(fecha => {
        const row = document.createElement("tr");
        const tdFecha = document.createElement("td");
        tdFecha.textContent = fecha;
        row.appendChild(tdFecha);

        puertos.forEach(puerto => {
            const portData = data.filter(item => item.puerto === puerto && item.fecha === fecha);
            const tdHora = document.createElement("td");
            const tdMarea = document.createElement("td");

            if (portData.length > 0) {
                portData.forEach(item => {
                    tdHora.innerHTML += `${item.hora}<br>`;
                    tdMarea.innerHTML += `${item.marea}<br>`;
                });
            } else {
                tdHora.innerHTML = "-";
                tdMarea.innerHTML = "-";
            }
            row.appendChild(tdHora);
            row.appendChild(tdMarea);
        });
        tbody.appendChild(row);
    });
}

// Implementación de debounce para optimizar la búsqueda
let debounceTimer;
function searchPorts() {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
        const query = document.getElementById("search-box").value.toLowerCase();
        const filteredData = tidesData.filter(item =>
            item.puerto.toLowerCase().includes(query)
        );
        loadTidesData(filteredData);
    }, 300);
}