import mongoose, { Schema, models } from 'mongoose';

const JobSchema = new Schema({
    title: { type: String, required: true, trim: true },
    company: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    employmentType: { type: String, required: true, trim: true },
    location: { type: String, required: true, trim: true },
    experience: { type: String, required: true, trim: true },
    salary: { type: String, trim: true },
    duties: { type: [String] },
    skills: { type: [String] },
    latitude: { type: String },
    longitude: { type: String }
}, { timestamps: true });

const Jobs = models.Job || mongoose.model('Job', JobSchema);

export default Jobs;
