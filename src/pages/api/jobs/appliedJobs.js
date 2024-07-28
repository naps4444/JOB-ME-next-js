import connectMongoDB from "../../../../lib/mongodb";
import JobApplication from "../../../../models/JobApplication";
import Jobs from "../../../../models/Jobs";



export default async function handler(req, res){
    if (req.method === 'GET') {
        try {
          const { userId } = req.query;
          console.log('connecting to mongodb');
          await connectMongoDB();
    
          // Fetch applications with populated job details
          const applications = await JobApplication.find({ userId })
            .populate({
              path: 'jobId',
              model: Jobs,
              select: 'title company location' // Select the fields you want to return
            })
            .lean(); // Use lean() for better performance
    
          // Transform the data to include both application and job details
          const appliedJobs = applications.map(app => ({
            applicationId: app._id,
            jobId: app.jobId._id,
            jobTitle: app.jobId.title,
            company: app.jobId.company,
            location: app.jobId.location,
            appliedAt: app.createdAt,
            // Include other application fields you want to return
            firstName: app.firstName,
            lastName: app.lastName,
            email: app.email,
            phoneNumber: app.phoneNumber,
            status: app.status,
            // Don't include coverLetter here for brevity, but you can if needed
          }));
    
          res.status(200).json({ appliedJobs });
        } catch (error) {
          console.error('Error fetching applied jobs:', error);
          res.status(500).json({ message: 'Internal server error' });
        }
      } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
      }
}